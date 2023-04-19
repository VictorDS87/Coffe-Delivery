import styled from 'styled-components'

export const Coffes = styled.div`

`

export const TitleSpan = styled.h1`
    font-family: 'Baloo 2', 'sans-serif';
    
`
export const ContainerCoffeCard = styled.div`
`

export const CoffeCard = styled.div`
    width: 256px;
    height: 310px;
    background-color: #F3F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-top-right-radius: 50px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 50px;
    img{
        margin-top: -1.3rem;
        width: 120px;
    }
`

export const Tag = styled.span`
    padding: 5px;
    background: #F1E9C9;
    color: #C47F17;
    border-radius: 20px;
    font-size: 12px;
    margin-top: 0.5rem;
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Title = styled.h2`
    color: #403937;
    font-size: 16px;
`

export const Description = styled.p`
    margin-left: 1.4rem;
    margin-right: 1rem;

    text-indent: 5px;
    color: #8D8686;
   
`

export const Payment = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1rem;

    img {
        width: 35px;
        margin-top: 0;
        margin-left: 0.8rem;
        background-color: #4B2995;
        border-radius: 6px;
    }
`

export const Value = styled.p`
    font-family: 'Baloo 2', 'sans-serif';
    color: #574F4D;
    font-size: 24px;
    span {
        font-family: 'Roboto', 'sans-serif';
        font-size: 14px;
    }
`

export const Amount = styled.p`
    display: flex;
    gap: 0.6rem;
    margin-left: 1.3rem;
    align-items: center;
    padding: 0.4rem 1rem 0.4rem 1rem;
    background-color: #E6E5E5;
    border-radius: 6px;
    span {
        color: #8047F8; 
        font-size: 1.4rem;
    }
`