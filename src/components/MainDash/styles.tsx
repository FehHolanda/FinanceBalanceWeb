import styled from "styled-components";


export const MainDash = styled.div`
    &{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    

    @media Screen and (max-width: 1200px){
        justify-content: flex-start;
        margin-top: 2rem;
    }
    @media Screen and (max-width: 768px){
        align-items: center;
    }
`;

export const CardsContainer = styled.div`
    &{  
        display: flex;
        gap: 10px;
        padding-bottom: 2rem;
    }

    @media Screen and (max-width: 1200px){
        flex-direction: column;
    }
    @media Screen and (max-width: 768px){
        width: 90%;
    }
`;

