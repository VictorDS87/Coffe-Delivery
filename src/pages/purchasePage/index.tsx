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
  eteste2 = 'debitCard',
  eteste3 = 'money'
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
    // setTestandoPatinho(shoppingCart)
    const [ products, setProducts ] = useState<PurchaseProps>([])

    // .toLocaleString('pt-BR', { minimumFractionDigits: 2 }).toString()
    let totalValue = shoppingCart.shoppingCart.reduce((acc, item) => acc + (item.value*item.amount), 0);
    const [patinho, setPatinho] = useState(false)
    const [patinho2, setPatinho2] = useState(false)
    const [patinho3, setPatinho3] = useState(false)

    function handlePaymentMethodCreditCard(e: any) {
        e.preventDefault();
        setPatinho(true)
        setPatinho2(false)
        setPatinho3(false)
    }

    function handlePaymentMethodDebitCard(e: any) {
        e.preventDefault();
        setPatinho2(true)
        setPatinho(false)
        setPatinho3(false)
    }

    function handlePaymentMethodMoney(e: any) {
        e.preventDefault();
        setPatinho3(true)
        setPatinho(false)
        setPatinho2(false)

        console.log(shoppingCart)
    }

    function reduceQuantity(e: any) {
        console.log(e.target.id)
    }

    function submitTeste(e: any) {
      e.preventDefault();

      // Gravar o metodo de pagamento
      let testess = e.target.creditCard.value
      if(patinho == true){
        testess = e.target.creditCard.value

      }if (patinho2 == true) {
        testess = e.target.bank.value

      } else{
        testess = e.target.money.value
      }

      setPurchaseInformation({
        cep: e.target.cep.value,
        city: e.target.city.value,
        complement: e.target.complement.value,
        houseNumber: e.target.houseNumber.value,
        neighborhood: e.target.neighborhood.value,
        street: e.target.street.value,
        uf: e.target.uf.value,
        paymentMethod: testess
      })

      api.post('history', purchaseInformation)
    }
    
    useEffect(() => {
      setProducts(shoppingCart)
      }, []);
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
                        <Complement  name='complement' type="text" placeholder='Complemento                                                Opcional' />
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

                    <PaymentMethod name='creditCard' value='creditCard' onClick={(e) =>{handlePaymentMethodCreditCard(e)}} disabled={patinho}>
                        <CreditCard color='#8047F8' size={32} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </PaymentMethod>

                    <PaymentMethod name='debitCard' value='debitCard' onClick={(e) =>{handlePaymentMethodDebitCard(e)}} disabled={patinho2}>
                        <Bank color='#8047F8' size={32} />
                        <p>CARTÃO DE DÉBITO</p>
                    </PaymentMethod>
                    
                    <PaymentMethod name='money' value='money' onClick={(e) =>{handlePaymentMethodMoney(e)}} disabled={patinho3}>
                        <Money color='#8047F8' size={32} /> 
                        <p>DINHEIRO</p>
                    </PaymentMethod>
        
                </ContainerPaymentMethod>
                
            </ContainerDeliveryInformation>

        </DeliveryInformation>

        <SelectedProducts>
            <Title>Cafés selecionados</Title>
            <ContainerSelectedProducts>
              {(shoppingCart.shoppingCart).length > 0 ? 
                shoppingCart.shoppingCart.map((coffee: ShppingCartProps) => {
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
                              <Reduce id={coffee.id} type='reset' onClick={(e) => { reduceQuantity(e) }}>
                                  <p><Minus id={coffee.id} color='#8047F8'/></p>
                              </Reduce> 
                              {coffee.amount} 
                              <Increase id={coffee.id} type='reset' >
                                <Plus id={coffee.id} color='#8047F8'/>
                              </Increase>
                            </Quantity>
                            <Remove id={coffee.id} type='reset' >
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
              
              : <div>Nenhum café selecionado...</div>}
              
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
              <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
            </ContainerSelectedProducts>
        </SelectedProducts>
    </ContainerPurchase>
  )
}



{/* <div>
<a
data-tooltip-id="my-tooltip"
            data-tooltip-content="Click me!"
            // onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
            >
            ◕‿‿◕
            </a>
            <Tooltip
            id="my-tooltip"
            content="Hello world!"
            isOpen={isOpen}
            />
    </div> */}


{/* <Box sx={{ width: 200 }}>
      <FormLabel
        id="storage-label"
        sx={{
          mb: 2,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.15rem',
        }}
      >
        Storage
      </FormLabel>
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue="512GB"
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {['512GB', '1TB', '2TB'].map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: 'md',
              boxShadow: 'sm',
              bgcolor: 'background.body',
            }}
          >
            <Radio
              label={`${value} SSD storage`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box> */}