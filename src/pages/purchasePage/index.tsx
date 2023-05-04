import React, { useEffect, useState } from 'react';
import {Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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
import { NavLink } from 'react-router-dom';

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number 
    amount: number
}

interface PurchaseProps {
  shoppingCart: ShppingCartProps[]
}

enum PaymentMethodProps {
  eteste1 = 'creditCard',
  eteste2 = 'debitcardMethod',
  eteste3 = 'money'
}

interface IdProduct {
  id: string
}

interface submitProps {
  cep: string
  street: string
  houseNumber: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: PaymentMethodProps
}

export function Purchase(shoppingCart: PurchaseProps) {  
    const [purchaseInformation, setPurchaseInformation] = useState<submitProps>()
    const [ products, setProducts ] = useState([shoppingCart])

    const [ productsAtt, setproductsAtt ] = useState<ShppingCartProps[]>([])

    let totalValue = shoppingCart.shoppingCart.reduce((acc, item) => acc + (item.value*item.amount), 0);
    let totalValueAtt = productsAtt.reduce((acc, item) => acc + (item.value*item.amount), 0);

    const [mainValueAlreadyRendered, setMainValueAlreadyRendered] = useState<boolean>(true) 
    const [creditCard, setCreditCard] = useState(false)
    const [debitcardMethod, setDebitcardMethod] = useState(false)
    const [money, setMoney] = useState(false)

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

        console.log(shoppingCart)
    }

    function reduceQuantity(e: any) {

        if(productsAtt.length == 0) {
          const updatedShoppingCart = products[0].shoppingCart.map(product => {
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

        } else{
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
    }

    function increaseQuantity(e: any) {
        if(productsAtt.length == 0) {
          const updatedShoppingCart = products[0].shoppingCart.map(product => {
  
              if (product.id === e.id) {
                return {
                  ...product, 
                  amount: product.amount + 1
                };
              }
              return product; 
      
          });  
          setproductsAtt(updatedShoppingCart)        

        } else{
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
    }

    function removeProduct(e: any) {
        if(productsAtt.length == 0) {
          setproductsAtt(products[0].shoppingCart.filter(item => item.id !== e.id))
        }else {
          setproductsAtt(productsAtt.filter(item => item.id !== e.id))

        }
        console.log(productsAtt)
        if(productsAtt.length-1 == 0) {
          setMainValueAlreadyRendered(false)
        } 
  
    }

    function submitTeste(e: any) {
      e.preventDefault();

      // Gravar o metodo de pagamento
      let paymentMethodSelected = e.target.creditCard.value
      if(creditCard == true){
        paymentMethodSelected = e.target.creditCard.value

      }if (debitcardMethod == true) {
        paymentMethodSelected = e.target.debitcardMethod.value

      } else{
        paymentMethodSelected = e.target.money.value
      }

      setPurchaseInformation({
        cep: e.target.cep.value,
        city: e.target.city.value,
        complement: e.target.complement.value,
        houseNumber: e.target.houseNumber.value,
        neighborhood: e.target.neighborhood.value,
        street: e.target.street.value,
        uf: e.target.uf.value,
        paymentMethod: paymentMethodSelected
      })

      api.post('history', purchaseInformation)
    }
    useEffect(() => {

      }, [products]);
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
                    <div><CEP name='cep' type="text" placeholder='CEP' /></div>
                    <div><Street name='street' type="text" placeholder='Rua' /></div>
                
                    <HouseNumberAndComplement>
                        <HouseNumber name='houseNumber' type="text" placeholder='Número' />
                        <Complement  name='complement' type="text" placeholder='Complemento                                           Opcional' />
                    </HouseNumberAndComplement>
                    
                    <NeighborhoodCityUf>
                        <Neighborhood name='neighborhood' type="text" placeholder='Bairro' />
                        <City name='city' type="text" placeholder='Cidade' />
                        <Uf name='uf' type="text" placeholder='UF' />
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

                    <PaymentMethod name='creditCard' value='creditCard' onClick={(e) =>{handlePaymentMethodCreditCard(e)}} disabled={creditCard}>
                        <CreditCard color='#8047F8' size={32} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </PaymentMethod>

                    <PaymentMethod name='debitcardMethod' value='debitcardMethod' onClick={(e) =>{handlePaymentMethodDebitcardMethod(e)}} disabled={debitcardMethod}>
                        <Bank color='#8047F8' size={32} />
                        <p>CARTÃO DE DÉBITO</p>
                    </PaymentMethod>
                    
                    <PaymentMethod name='money' value='money' onClick={(e) =>{handlePaymentMethodMoney(e)}} disabled={money}>
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
                {/* Dois IF, o primeiro verifica se existe algum valor para ser lido, o segundo mostra */}
                {/* o valor correto, sendo o primeiro o passado pelo componente, o segundo é o valor alterado */}
                {((shoppingCart.shoppingCart).length > 0 || productsAtt.length > 0) && mainValueAlreadyRendered ?

                    (shoppingCart.shoppingCart).length > 0 && productsAtt.length == 0 ? 
                      products[0].shoppingCart.map((coffee: ShppingCartProps) => {
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
                                    <Increase id={coffee.id} type='reset' onClick={(e) => { increaseQuantity(e.target)}}>
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
                      })
                    
                    : <div>{productsAtt.map((coffee) => {
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

                : <div>Nenhum café selecionado...</div>
                }
              </CoffesSelected>
              
              {((shoppingCart.shoppingCart).length > 0 || productsAtt.length > 0) && mainValueAlreadyRendered ?

                  (shoppingCart.shoppingCart).length > 0 && productsAtt.length == 0 ?
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

                    : <div>
                        <TotalProducts>
                          <p>Total de itens</p>
                          <span>R$ {totalValueAtt.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                        </TotalProducts>
                        <Frete>
                          <p>Entrega</p>
                          <span>R$ 3,50</span>
                        </Frete>
                        <PurchaseTotal>
                          <strong>Total</strong>
                          <strong>R$ {(totalValueAtt + 3.5).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>     
                        </PurchaseTotal>
                      </div> 
                : <div></div>

              }
              <NavLink to="sucesspage"><ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder></NavLink>
            </ContainerSelectedProducts>
        </SelectedProducts>
    </ContainerPurchase>
  )
}