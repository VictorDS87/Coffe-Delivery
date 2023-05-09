import { useEffect, useState } from 'react';

import locateImg from '../../assets/purchasePage/locate.svg'
import cashImg from '../../assets/purchasePage/cash.svg'
import { 
  ButtonConfirmOrder,
  CEP, 
  City, 
  CoffeCard, 
  CoffeImage, 
  CoffesSelected, 
  Complement, 
  ContainerDeliveryInformation, 
  ContainerPaymentMethod, 
  ContainerPurchase, 
  ContainerSelectedProducts,
  DeliveryInformation, 
  Frete, 
  Header, 
  HeaderDeliveryInformation, 
  HouseNumber, 
  HouseNumberAndComplement, 
  Increase, 
  IncreaseReduceAndRemove, 
  InformationsCoffeSelected, 
  Input, 
  Name, 
  NameAndValue, 
  Neighborhood, 
  NeighborhoodCityUf, 
  PaymentMethod, 
  PurchaseTotal, 
  Quantity, 
  Reduce, 
  Remove, 
  SelectedProducts, 
  Separator, 
  Span, 
  Street, 
  Strong, 
  Title, 
  TotalProducts, 
  Uf, 
  Value } from './styles';
import { Bank, CreditCard, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { api } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number 
    amount: number
}

interface PurchaseProps {
  shoppingCart: ShppingCartProps[]
  values: (info: ShppingCartProps[]) => void;
}

export function Purchase({ shoppingCart, values }: PurchaseProps) {      
    const [ productsAtt, setproductsAtt ] = useState<ShppingCartProps[]>([])

    const [ maxcharactersCEP, setMaxCharactersCEP ] = useState<number>()
  
    const [creditCard, setCreditCard] = useState(false)
    const [debitcardMethod, setDebitcardMethod] = useState(false)
    const [money, setMoney] = useState(false)

    let totalValue = productsAtt.reduce((acc, item) => acc + (item.value*item.amount), 0);
    
    const navigate = useNavigate();

    function handlePaymentMethodCreditCard(e: any) {
        e.preventDefault();
        setCreditCard(true)
        setDebitcardMethod(false)
        setMoney(false)
    }
    function handlePaymentMethodDebitcardMethod(e: any) {
        e.preventDefault();
        setDebitcardMethod(true)
        setCreditCard(false)
        setMoney(false)
    }
    function handlePaymentMethodMoney(e: any) {
        e.preventDefault();
        setMoney(true)
        setCreditCard(false)
        setDebitcardMethod(false)
    }

    function maximumCharactersCEP(e: any) {
        setMaxCharactersCEP(e.target.value.slice(0, 8))
    }

    function reduceQuantity(e: any) {    
          const updatedShoppingCart = productsAtt.map(product => {
            if(product.amount > 1) {
              if (product.id === e.id) {
                return {
                  ...product, 
                  amount: product.amount - 1
                };
              }
              return product;
            }else {
              return product
            }
          });    
          setproductsAtt(updatedShoppingCart)
    }

    function increaseQuantity(e: any) {
          const updatedShoppingCart = productsAtt.map(product => {     
              if (product.id === e.id) {
                return {
                  ...product, 
                  amount: product.amount + 1
                };
              }
              return product;
           
          });    
          setproductsAtt(updatedShoppingCart)
    }

    function removeProduct(e: any) {
        setproductsAtt(productsAtt.filter(item => item.id !== e.id))
        values(productsAtt.filter(item => item.id !== e.id))
    }

    async function submitTeste(e: any) {
        e.preventDefault()

        if (productsAtt.length == 0) {
          return alert('Nenhum produto no carrinho')
        }

        // Gravar o metodo de pagamento
        let paymentMethodSelected = ''

        if(creditCard == true){
          paymentMethodSelected = e.target.creditCard.value
        }if (debitcardMethod == true) {
          paymentMethodSelected = e.target.debitcardMethod.value         
        } else{
          paymentMethodSelected = e.target.money.value
        }

        //Verificar se existe algum valor que não foi preenchido
        if(
          e.target.cep.value.trimStart() != '' &&
          e.target.city.value.trimStart() != '' &&
          e.target.complement.value.trimStart() != '' &&
          e.target.houseNumber.value.trimStart() != '' &&
          e.target.neighborhood.value.trimStart() != '' &&
          e.target.street.value.trimStart() != '' &&
          e.target.uf.value.trimStart() != '' &&
          paymentMethodSelected.trimStart() != ''
        ){

          await api.post('history', {
            cep: e.target.cep.value,
            city: e.target.city.value,
            complement: e.target.complement.value,
            houseNumber: e.target.houseNumber.value,
            neighborhood: e.target.neighborhood.value,
            street: e.target.street.value,
            uf: e.target.uf.value, 
            paymentMethod: paymentMethodSelected
          }).then(() => {
            values([])
            navigate("/purchase/sucesspage");
          })
          .catch((error) => {
            console.log(error);
          });     

        }else {
          alert('Preencha todos os valores, por favor!')
        }
    }

    useEffect(() => {
      setproductsAtt(shoppingCart); 
    }, [])

  return (
    <ContainerPurchase onSubmit={(e) => {submitTeste(e)}}>
        <DeliveryInformation>
            <Title>Complete seu pedido</Title>
            <ContainerDeliveryInformation>
                <Header>
                    <img src={locateImg} alt="" />
                    <HeaderDeliveryInformation>
                        <Strong>Endereço de Entrega</Strong>
                        <Span>Informe o endereço onde deseja receber o seu pedido</Span>

                    </HeaderDeliveryInformation>
                </Header>
                <Input>
                    <div><CEP value={maxcharactersCEP} name='cep' type="number" placeholder='CEP' onChange={(e) => {maximumCharactersCEP(e)}}/></div>
                    <div><Street name='street' type="text" placeholder='Rua' /></div>
                
                    <HouseNumberAndComplement>
                        <HouseNumber name='houseNumber' type="number" placeholder='Número' />
                        <Complement  name='complement' type="text" placeholder='Complemento                                                Opcional' />
                    </HouseNumberAndComplement>
                    
                    <NeighborhoodCityUf>
                        <Neighborhood name='neighborhood' type="text" placeholder='Bairro' />
                        <City name='city' type="text" placeholder='Cidade' />
                        <Uf name='uf' type="text" placeholder='UF' maxLength={2}/>
                    </NeighborhoodCityUf>
        
                </Input>
            </ContainerDeliveryInformation>

            <ContainerDeliveryInformation>
                <Header>
                    <img src={cashImg} alt="" />
                    <HeaderDeliveryInformation>
                        <Strong>Pagamento</Strong>
                        <Span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Span>
                    </HeaderDeliveryInformation>
                </Header>
                <ContainerPaymentMethod>

                    <PaymentMethod name='creditCard' value='Cartão de crédito' onClick={(e) =>{handlePaymentMethodCreditCard(e)}} disabled={creditCard}>
                        <CreditCard color='#8047F8' size={32} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </PaymentMethod>

                    <PaymentMethod name='debitcardMethod' value='Cartão de débito' onClick={(e) =>{handlePaymentMethodDebitcardMethod(e)}} disabled={debitcardMethod}>
                        <Bank color='#8047F8' size={32} />
                        <p>CARTÃO DE DÉBITO</p>
                    </PaymentMethod>
                    
                    <PaymentMethod name='money' value='Dinheiro' onClick={(e) =>{handlePaymentMethodMoney(e)}} disabled={money}>
                        <Money color='#8047F8' size={32} /> 
                        <p>DINHEIRO</p>
                    </PaymentMethod>
        
                </ContainerPaymentMethod>
                
            </ContainerDeliveryInformation>

        </DeliveryInformation>

        <SelectedProducts>
            <Title>Cafés selecionados</Title>
            <ContainerSelectedProducts>
              <CoffesSelected>
                      {productsAtt.length > 0 ?
                        <div>{productsAtt.map((coffee) => {
                          return (
                            <div key={coffee.id}>
                                <CoffeCard>
            
                                  <CoffeImage src={coffee.image} alt={coffee.name} />
                                  <InformationsCoffeSelected>
                                    <NameAndValue>
                                        <Name> {coffee.name} </Name>       
                                        <Value>R$ {coffee.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Value>   
                                    </NameAndValue>
            
                                    <IncreaseReduceAndRemove>
                                      <Quantity>
                                        <Reduce id={coffee.id} type='reset' onClick={(e) => { reduceQuantity(e.target) }}>
                                            <p><Minus id={coffee.id} color='#8047F8'/></p>
                                        </Reduce> 
                                        {coffee.amount} 
                                        <Increase id={coffee.id} type='reset' onClick={(e) => { increaseQuantity(e.target)}} >
                                          <Plus id={coffee.id} color='#8047F8'/>
                                        </Increase>
                                      </Quantity>
                                      <Remove id={coffee.id} type='reset' onClick={(e) => { removeProduct(e.target) }}>
                                        <Trash id={coffee.id} size={18}/>
                                        Remover
                                      </Remove>
                                    </IncreaseReduceAndRemove>
                                  </InformationsCoffeSelected>
                                </CoffeCard>
                                <Separator></Separator>
                              </div>
                          )
                        })}</div>  
                        
                      : <div>Esperando produtos...</div> 
                      }

              </CoffesSelected>
              
              {productsAtt.length > 0 ?
                <div>
                  <TotalProducts>
                    <p>Total de itens</p>
                    <span>R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </TotalProducts>
                  <Frete>
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                  </Frete>
                  <PurchaseTotal>
                    <strong>Total</strong>
                    <strong>R$ {(totalValue + 3.5).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>     
                  </PurchaseTotal>
                </div>

                : <div></div> 
              }

              <ButtonConfirmOrder type='submit'>Confirmar Pedido</ButtonConfirmOrder>
       
            </ContainerSelectedProducts>
        </SelectedProducts>
    </ContainerPurchase>
  )
}