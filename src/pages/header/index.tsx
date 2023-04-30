import {HeaderContainer, ShoppingCartStyle, Location} from './styles'
import { MapPin } from '@phosphor-icons/react'

import CartImg from '../../assets/header/ShoppingCart.svg'
import logoImg from '../../assets/header/logo.svg'
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    childInfo: number;
}

export function Header({ childInfo }: HeaderProps) {
    return (
        <HeaderContainer> 
            <img src={logoImg} alt="" /> 
            <div>
                <Location><MapPin size={32} color='#8047F8'/><span>Porto Alegre, SP</span></Location>
                <NavLink to="/purchase"><ShoppingCartStyle><img src={CartImg} alt="" /><span>{childInfo}</span></ShoppingCartStyle></NavLink>
            </div>
        </HeaderContainer>
    )
}