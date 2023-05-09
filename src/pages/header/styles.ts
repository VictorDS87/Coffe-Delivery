import styled from 'styled-components'

export const HeaderContainer = styled.div`
    max-width: 1120px;
    margin: auto;
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }
    
    a {
        text-decoration: none;   
    }
`

export const ShoppingCartStyle = styled.div`
    img {
        width: 29px;
    }

    padding-left: 7px;
    padding-top: 7px;
    padding-bottom: 7px;
    background-color: #F1E9C9;
    border-radius: 4px;

    margin-left: 1rem;

    span {
        position: relative;
        display: flex;
        justify-content: center;
        top: -20px;
        left: 5px;
        
        color: white;
        background-color: #C47F17;
        width: 20px;
        height: 20px;
        border-radius: 9999px;
        
        font-style: none;

    }
`

export const Location = styled.div`
    padding: 5px;
    background-color: #EDE4FF;
    border-radius: 4px;

    color: #4B2995;
`