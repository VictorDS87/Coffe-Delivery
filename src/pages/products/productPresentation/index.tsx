import shoppingCartImg from '../../../assets/productPresentation/shoppingCart.svg'
import boxImg from '../../../assets/productPresentation/box.svg'
import timerImg from '../../../assets/productPresentation/timer.svg'
import hotCoffeImg from '../../../assets/productPresentation/hotCoffe.svg'

import coffeImg from '../../../assets/productPresentation/coffe.svg'
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
                    <p>Entrega rápida e rastreada</p>
                </BenefitsCard>
                <BenefitsCard>
                    <Benefits style={styles.BackgroundDark}>
                    <img src={boxImg} alt="" />
                
                    </Benefits>
                    <p>Entrega rápida e rastreada</p>
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
                    <p>Entrega rápida e rastreada</p>
                </BenefitsCard>
            </CardContainer>
        </PresentationContainer>
    )
}