import shoppingCartImg from '../../../assets/products/productPresentation/shoppingCart.svg'
import boxImg from '../../../assets/products/productPresentation/box.svg'
import timerImg from '../../../assets/products/productPresentation/timer.svg'
import hotCoffeImg from '../../../assets/products/productPresentation/hotCoffe.svg'

import coffeImg from '../../../assets/products/productPresentation/coffe.svg'
import { PresentationContainer, SubDescription, TextAndImage, Title, BenefitsCard, Benefits, CardContainer } from './styles'

const styles = {
    BackgroundYellowDark: {     
      backgroundColor: '#C47F17',
    },
    BackgroundDark: {     
      backgroundColor: '#574F4D',
    },
    BackgroundYellow: {     
      backgroundColor: '#DBAC2C',
    },
    BackgroundPurple: {     
      backgroundColor: '#8047F8',
    },
  }

export function ProductPresentation() {
    return (
        <PresentationContainer>
            <TextAndImage>
                <div>
                    <Title>Encontre o café perfeito para&nbsp; qualquer hora do dia</Title>
                    <SubDescription>Com o Coffe Delivery você recebe seu café onde estiver, a<br></br>qualquer hora</SubDescription>

                </div>
                <div><img src={coffeImg} alt="" /></div>
            </TextAndImage>

            <CardContainer>
                <BenefitsCard>
                    <Benefits style={styles.BackgroundYellowDark}>
                    <img src={shoppingCartImg} alt="" />
                
                    </Benefits>
                    <p>Compra simples e segura</p>
                </BenefitsCard>
                <BenefitsCard>
                    <Benefits style={styles.BackgroundDark}>
                    <img src={boxImg} alt="" />
                
                    </Benefits>
                    <p>Embalagem mantém o café intacto</p>
                </BenefitsCard>
            </CardContainer>

            <CardContainer>
                <BenefitsCard>
                    <Benefits style={styles.BackgroundYellow}>
                    <img src={timerImg} alt="" />
                
                    </Benefits>
                    <p>Entrega rápida e rastreada</p>
                </BenefitsCard>
                <BenefitsCard>
                    <Benefits style={styles.BackgroundPurple}>
                    <img src={hotCoffeImg} alt="" />
                
                    </Benefits>
                    <p>O café chega fresquinho até você</p>
                </BenefitsCard>
            </CardContainer>
        </PresentationContainer>
    )
}