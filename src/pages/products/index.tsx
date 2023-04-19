import testeImg from './imageTeste.svg'
import shoppingCartImg from '../../assets/products/shoppingCart.svg'
import { ProductPresentation } from "./productPresentation"
import { Amount, CoffeCard, Coffes, ContainerCoffeCard, Description, Informations, Payment, Tag, Title, TitleSpan, Value } from "./styles"

export function Products() {
    return (
        <div>
            <ProductPresentation />
            <Coffes>
                <TitleSpan>Nossos cafés</TitleSpan>
                <ContainerCoffeCard>
                    <CoffeCard>
                        <img src={testeImg} alt="" />
                        <Tag>Tradicional</Tag>
                        <Informations>
                            <Title>Expresso Tradicional</Title>
                            <Description>O  tradicional café feito com água quente e grâos moídos</Description>
                        </Informations>
                        <Payment>
                            <Value><span>R$ </span>9,90</Value>
                            <Amount><span>–</span> 1 <span>+</span></Amount>
                            <img src={shoppingCartImg} alt="" />
                        </Payment>
                    </CoffeCard>
                </ContainerCoffeCard>
            </Coffes>

        </div>
    )
}