import testeImg from './imageTeste.svg'
import shoppingCartImg from '../../assets/products/shoppingCart.svg'
import { ProductPresentation } from "./productPresentation"
import { Amount, ButtonCart, CoffeCard, Coffes, ContainerCoffeCard, Description, Informations, Payment, Tag, Title, TitleSpan, Value, } from "./styles"
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface Product {
    id: string
    image: string
    characteristics: []
    name: string
    description: string
    value: number
    amount: number
}

interface characteristicProps {
    name: string
}

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number 
    amount: number
}

interface ProductProps {
    values: (info: ShppingCartProps[]) => void;
}
export function Products({ values }: ProductProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [shoppingCart, setShoppingCart] = useState<ShppingCartProps[]>([])

    async function fetchProducts() {
        let response = await api.get('products')
        setProducts(response.data)
    }

    async function increaseQuantity(e:any) {
        setIsLoading(true)
        // Buscar valor de amount  e alterar quantidade
        const response = await api.get('products/'+e.target.id) 
        const responseAmount = response.data.amount + 1

        // Alterar o valor no servidor
        await api.patch('products/'+e.target.id, { amount: responseAmount })

        // Atualizar o valor no useState
        const tempProducts = [...products];
        const productIndex = products.findIndex((task) => {return task.id == response.data.id;});        
        tempProducts[productIndex].amount = responseAmount;
        setProducts(tempProducts);

        setIsLoading(false)
    }
    
    async function reduceQuantity(e:any) {
        setIsLoading(true)
        // Buscar valor de amount 
        const response = await api.get('products/'+e.target.id) 
        if(response.data.amount <= 1) {
            setIsLoading(false)
            return
        }
        const responseAmount = response.data.amount - 1

        // Alterar o valor no servidor
        await api.patch('products/'+e.target.id, { amount: responseAmount })

        // Atualizar o valor no useState
        const tempProducts = [...products];
        const productIndex = products.findIndex((task) => {return task.id == response.data.id;});        
        tempProducts[productIndex].amount = responseAmount;
        setProducts(tempProducts);

        setIsLoading(false)
    }

    async function addToShoppingCart(e: any) {
        setIsLoading(true)
        const response = await api.get('products/'+e.target.id) 
        
        const validationRepeatedItem = shoppingCart.filter(product => product.id === response.data.id)
        if(validationRepeatedItem.length == 0){
            setShoppingCart((state) => [...state, {
                id: response.data.id, 
                image: response.data.image, 
                name: response.data.name, 
                value: response.data.value,
                amount: response.data.amount,
            }])
            
        }else {   
            if(validationRepeatedItem[0].amount !== response.data.amount) {
                const updatedShoppingCart = shoppingCart.map(product => {
                    if (product.id === response.data.id) {
                      return {
                        ...product, 
                        amount: response.data.amount
                      };
                    }
                    return product;
                });
                  
                setShoppingCart(updatedShoppingCart);
                return setIsLoading(false)
            }
            alert('Você já tem esse item salvo no carrinho, aumente a quantidade ou remova ele do carrinho na hora da finalização')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        values(shoppingCart)
    }, [shoppingCart])
    return (
        <div>
            <ProductPresentation />
            <Coffes>
                <TitleSpan>Nossos cafés</TitleSpan>
                <ContainerCoffeCard>
                { products.map((product: Product) => 
                    <CoffeCard key={product.id}>
                        <img src={product.image} alt="" />
                        <Tag>{ product.characteristics.map((characteristic: characteristicProps) => 
                            <div>{characteristic.name}</div>
                        )}</Tag>
                        <Informations>
                            <Title>{product.name}</Title>
                            <Description>{product.description}</Description>
                        </Informations>
                        <Payment>
                            <Value><span>R$ </span>{product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Value>
                            <Amount>
                                <button disabled={isLoading} id={product.id} onClick={(e) => {reduceQuantity(e)}}>–</button>
                                 {product.amount} 
                                 <button disabled={isLoading} id={product.id} onClick={(e) => {increaseQuantity(e)}}>+</button>
                            </Amount>
                            <ButtonCart id={product.id} onClick={(e) => {addToShoppingCart(e)}} disabled={isLoading}><img id={product.id} src={shoppingCartImg} alt="" /></ButtonCart>
                        </Payment>
                    </CoffeCard>                 
                )}
                    
                </ContainerCoffeCard>
            </Coffes>

        </div>
    )
}