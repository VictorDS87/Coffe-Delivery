import styled from 'styled-components'

export const Coffes = styled.div`

`

export const TitleSpan = styled.h1`
    font-family: 'Baloo 2', 'sans-serif';
    
`
export const ContainerCoffeCard = styled.div`
      display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`

export const CoffeCard = styled.div`
    margin-top: 2rem;
    width: 276px;
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
    display: flex;

    div {
        padding: 5px;
        background: #F1E9C9;
        color: #C47F17;
        border-radius: 20px;
        font-size: 12px;
        margin-top: 0.5rem;
    }
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
    margin-left: 1rem;
    font-size: 14px;
    color: #8D8686;
   
`

export const Payment = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1rem;
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
    button {
        color: #8047F8; 
        font-size: 1.4rem;
        cursor: pointer;

        border: transparent;
        background: #E6E5E5;
        :hover {
            filter: brightness(0.5);
        }

        :disabled {
            cursor: not-allowed;
            filter: blur(0.04rem);
        }
    }
`

export const ButtonCart = styled.button`
    border: transparent;
    cursor: pointer;
    img {
        width: 38px;
        margin-top: 0;
        margin-left: 0.5rem;
        background-color: #4B2995;
        border-radius: 6px;
    }

    
    :disabled {
        cursor: not-allowed;
        filter: blur(0.05rem);
    }
`