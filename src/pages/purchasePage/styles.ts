import styled from "styled-components";

export const ContainerPurchase = styled.form`
margin-top: 3rem;
display: flex;
/* justify-content: space-between; */
`
export const Title = styled.h2`
    color: #403937;
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 20px;
`

export const SelectedProducts = styled.div`
    width: 40%;
`

export const ContainerSelectedProducts = styled.div`
    padding: 2rem;
    background-color: #F3F2F2;

    border-top-right-radius: 30px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 5px;
`


export const DeliveryInformation = styled.div`
    width: 55%;
    margin-right: 3.5rem;


`

export const ContainerDeliveryInformation = styled.div`
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: #F3F2F2;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    img {
        width: 24px;
    }
`

export const HeaderDeliveryInformation = styled.div`
    margin-top: -0.3rem;
    line-height: 0.4;
`

export const Strong = styled.p`
    color: #403937;
    font-size: 16px;
`

export const Span = styled.p`
    color: #574F4D;
    font-size: 14px;
`

export const Input = styled.div`
    margin-top: 1rem;
    margin-right:1rem;
`

export const BaseInput = styled.input`
    border: 1px solid #E6E5E5;
    border-radius: 6px;
    padding: 12px;
    margin-top: 1rem;

    background-color: #EEEDED;
    color: #574F4D;

    width: 37%;
    font-family: "Roboto", 'sans-serif';
    &:focus {
        outline: none;
    }
`

export const CEP = styled(BaseInput)`
    
`
export const Street = styled(BaseInput)`
    width: 100%;
`
export const HouseNumberAndComplement = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 2.5rem;
`
export const HouseNumber = styled(BaseInput)`

    width: 100%;
`
export const Complement = styled(BaseInput)`
    width: 100%;
`
export const NeighborhoodCityUf = styled.div`
    display: grid;
    grid-template-columns: 6.2fr 7fr 1fr;
    gap: 2.5rem;
`
export const Neighborhood = styled(BaseInput)`
    width: 100%;
`
export const City = styled(BaseInput)`
    width: 100%;
`
export const Uf = styled(BaseInput)`
    width: 100%;
`

export const PaymentMethod = styled.button`
    padding: 11px;
    width: 100%;
    border-radius: 6px;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-right: 0.4rem;
    
    background: #E6E5E5;
    color: #574F4D;

    cursor: pointer;
    p {
        font-size: 12px;
        font-family: 'Roboto', 'sans-serif';
    }

    border: 1px solid #E6E5E5;
    &:hover {
        filter: brightness(0.9);
    }
    
    &:disabled {
        color: #574F4D;
        background-color: #EBE5F9;
        border: 1px solid #8047F8;
    }

`

export const ContainerPaymentMethod= styled.div`
    display: flex;
`

// Card from Coffes Selected  

export const CoffeCard = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

`

export const CoffeImage = styled.img`
    width: 70px;
`

export const InformationsCoffeSelected = styled.div`
    width: 295px;

`

export const NameAndValue = styled.div`
    display: flex;
    justify-content: space-between;

    color: #403937;
`

export const Name = styled.p`
font-weight: 400;
`

export const Value = styled.p`
`

export const IncreaseReduceAndRemove = styled.div`
    display: flex;
    gap: 1rem;
`

export const Quantity  = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;
    height: 34px;
    
    border-radius: 6px;
    background: #E6E5E5;
    color: #272221;
`

export const Reduce = styled.button`
    background-color: transparent;
    border: 0;

    cursor: pointer;
`

export const Increase = styled.button`
    background-color: transparent;
    border: 0;

    cursor: pointer;
    color: red;
`

export const Remove = styled.button`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
    border-radius: 6px;
    border: 0;

    background: #E6E5E5;

    cursor: pointer;
    transition: .4s;

    svg {
        color: #8047F8
    }
    &:hover {
        color: rgb(241 140 140);

        svg {
            color: rgb(251 140 140)
        }
    }
`

export const Separator = styled.div`
    content: "";
    margin-top: 1rem;
    background: #DEDEDE;
    
    padding: 0.0000001px;
    height: 1px;
    width: 386px;
`

export const TotalProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;

    color: #574F4D;
`

export const Frete = styled.div`
    margin-top: -1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #574F4D;
`

export const PurchaseTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    color: #403937;
    strong {
        font-family: 'Roboto', 'sans-serif';
        font-weight: 700;
        font-size: 20px;
    }
`

export const ButtonConfirmOrder = styled.button`
    width: 100%;
    margin-top: 36px;
    padding: 12px 8px;

    border: none;
    border-radius: 6px;
    background-color: #DBAC2C;

    font-family: 'Roboto', 'sans-serif';
    font-weight: 700;
    font-size: 14px;

    color: #FFFFFF;

    cursor: pointer;
    transition: .4s;
    &:hover{
        filter: brightness(0.8);
        color: antiquewhite;
    }
`