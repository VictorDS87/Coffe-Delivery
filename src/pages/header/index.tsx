import {HeaderContainer, ShoppingCartStyle, Location} from './styles'
import { MapPin, ShoppingCart,  } from '@phosphor-icons/react'

import CartImg from '../../assets/header/ShoppingCart.svg'
import logoImg from '../../assets/header/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />

            <div>
                <Location><MapPin size={32} color='#8047F8'/><span>Porto Alegre, SP</span></Location>
                <ShoppingCartStyle><img src={CartImg} alt="" /></ShoppingCartStyle>
            </div>
        </HeaderContainer>
    )
}