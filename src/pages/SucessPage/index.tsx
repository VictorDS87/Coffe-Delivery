import { useEffect, useState } from 'react';
import deliveryImg from '../../assets/sucessPage/delivery.svg'
import { api } from '../../lib/axios';

import { Container, Header, OrderInformation, Summary, SummaryContainer } from "./styles";

enum PaymentMethodProps {
    credit = 'Cartão de crédito',
    debit = 'Cartão de débito',
    money = 'Dinheiro'
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

export function SucessPage() {
    const [infoDelivery, setInfoDelivery ] = useState<submitProps>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('history');
            setInfoDelivery(response.data[(response.data.length - 1)]);
        };
        fetchData();
    }, [])
    return (
        <Container>
            <OrderInformation>
                <Header>
                    <h1>Uhu! Pedido confirmado</h1>
                    <span>Agora é só agurdar que logo o café chegará até você</span>
                </Header>
                <SummaryContainer>
                    <Summary>
                        <div>
                            <p>Entrega em {infoDelivery ?<strong>{infoDelivery.street}, {infoDelivery.neighborhood}, {infoDelivery.houseNumber}, {infoDelivery.cep}, {infoDelivery.uf}</strong> : 'Carregando...'}
                            <br></br>
                            Ferrapos - Porto Alegre, RS
                            </p>
                        </div>
                        <div>
                            <p>Previsão de entrega
                            <br></br>
                            <strong>20 min - 30 min</strong>
                            </p>
                        </div>
                        <div>
                            <p>Forma de pagamento
                            <br></br>
                            {infoDelivery ?<strong>{infoDelivery.paymentMethod}</strong> : 'Carregando...'}
                            
                            </p>
                        </div>

                    </Summary>
                </SummaryContainer>
            </OrderInformation>
            <img style={{
                width: '592px',
                height: '431px'
            }} src={deliveryImg} alt="" />
        </Container>
    )
}