import testeImg from './imageTeste.svg'
import shoppingCartImg from '../../assets/products/shoppingCart.svg'
import { ProductPresentation } from "./productPresentation"
import { Amount, ButtonCart, CoffeCard, Coffes, ContainerCoffeCard, Description, Informations, Payment, Tag, Title, TitleSpan, Value, } from "./styles"
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface Task {
    id: string
    image: string
    characteristics: []
    name: string
    description: string
    value: number
    amount: number
}

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number
}

export function Products() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [shoppingCart, setShoppingCart] = useState<ShppingCartProps[]>([])

    async function patinho() {
        let response = await api.get('products')
        console.log(response)
        setTasks(response.data)
    }

    async function teste(e:any) {
        setIsLoading(true)
        // Buscar valor de amount 
        const response = await api.get('products/'+e.target.id) 
        const responseAmount = response.data.amount + 1

        // Alterar o valor no servidor
        await api.patch('products/'+e.target.id, { amount: responseAmount })

        // Atualizar o valor no useState
        const tempTasks = [...tasks];
        const taskIndex = tasks.findIndex((task) => {return task.id == response.data.id;});        
        tempTasks[taskIndex].amount = responseAmount;
        setTasks(tempTasks);

        setIsLoading(false)
    }
    
    async function teste2(e:any) {
        setIsLoading(true)
        // Buscar valor de amount 
        const response = await api.get('products/'+e.target.id) 
        const responseAmount = response.data.amount - 1

        // Alterar o valor no servidor
        await api.patch('products/'+e.target.id, { amount: responseAmount })

        // Atualizar o valor no useState
        const tempTasks = [...tasks];
        const taskIndex = tasks.findIndex((task) => {return task.id == response.data.id;});        
        tempTasks[taskIndex].amount = responseAmount;
        setTasks(tempTasks);

        setIsLoading(false)
    }

    async function teste3(e: any) {
        const response = await api.get('products/'+e.target.id) 
        console.log(response)
        
        setShoppingCart((state) => [...state, {
            id: response.data.id, 
            image: response.data.image, 
            name: response.data.name, value: 
            response.data.value
        }])
        console.log(shoppingCart.length)
    }

    useEffect(() => {
        patinho()
    }, [])
    return (
        <div>
            <ProductPresentation />
            <Coffes>
                <TitleSpan>Nossos cafés</TitleSpan>
                <ContainerCoffeCard>
                { tasks.map((task: Task) => 
                    <CoffeCard key={task.id}>
                        <img src={task.image} alt="" />
                        <Tag>{ task.characteristics.map((tassk) => 
                            <div>{tassk.name}</div>
                        )}</Tag>
                        <Informations>
                            <Title>{task.name}</Title>
                            <Description>{task.description}</Description>
                        </Informations>
                        <Payment>
                            <Value><span>R$ </span>{task.value}</Value>
                            <Amount><button disabled={isLoading} id={task.id} onClick={(e) => {teste2(e)}}>–</button> {task.amount} <button disabled={isLoading} id={task.id} onClick={(e) => {teste(e)}}>+</button></Amount>
                            <ButtonCart id={task.id} onClick={(e) => {teste3(e)}} disabled={isLoading}><img id={task.id} src={shoppingCartImg} alt="" /></ButtonCart>
                        </Payment>
                    </CoffeCard>
                    
                )}
                    
                </ContainerCoffeCard>
            </Coffes>

        </div>
    )
}