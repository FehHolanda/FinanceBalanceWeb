import styled from "styled-components";

export const Header = styled.header`
    &{  
        width: 100vw;
        background-color:  #ffe1bc;
    }
`;

export const Label = styled.label`
    &{
        font-size: 18px;
        font-weight: 600;
        color: #676767;
        margin-left: 15px;
    }

    @media Screen and (max-width: 768px){        
    
    }
`;

export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between ;
    padding: 2px;

    @media Screen and (max-width: 768px){ 
        float: right;
        flex-direction:column;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1rem;
        height: 100%;
        background-color:  #ffe1bc;

    }


`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media Screen and (max-width: 768px){ 
        flex-direction:column;
        align-items: start;
        justify-content: flex-start;
        z-index: 9;
        padding-right: 1rem;
        height: 100%;
    }

`;

export const LinkItem= styled.div`
    padding: 4px;
    background-color: pink;    
    margin: 0.5rem;
    border-radius: 5px;
`;