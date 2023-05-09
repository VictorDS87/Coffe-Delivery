import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
`
export const OrderInformation = styled.div`
   
`
export const Header = styled.div`
    margin-bottom: 2.199rem;

    h1 {
        font-family: 'Baloo 2', 'sans-serif';
        font-weight: 800;
        font-size: 2rem;

        color: #C47F17;   

        margin-bottom: 0;
    }
    
    span {
        font-size: 20px;
        color: #403937;      
    }
   
`
export const SummaryContainer = styled.div`
    border: 1px solid transparent;
    border-radius: 6px 36px;

    
    background: 
    linear-gradient(to right, white, #FAFAFA), 
    linear-gradient(to right, #DBAC2C, #8047F8); 
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    width: 526px;
    word-wrap: break-word;
  
  `
export const Summary = styled.div`
    padding: 2rem;

    p{
        font-family: 'Roboto', 'sans-serif';
        font-weight: 400;
        font-size: 1rem;
    }

    strong {
        font-family: 'Roboto', 'sans-serif';
    }
`
