import deliveryImg from '../../assets/sucessPage/delivery.svg'

import { Container, Header, OrderInformation, Summary, SummaryContainer } from "./styles";


export function SucessPage() {
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
                            <p>Entrega em <strong>Rua joão Daniel Martinelli, 102</strong> 
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
                            <strong>Cartão de Crédito</strong>
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