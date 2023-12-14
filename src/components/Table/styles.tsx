import styled from "styled-components";

export const Table = styled.div`
    &{
        
    }

    TableContainer{
        box-shadow: 0px 13px 20px #80808029;

    }

    .MuiTableRow-root>*{
        padding: 10px;
    }

    .MuiTableRow-root.MuiTableRow-head>*{
        font-weight: bold!important;
    }

    .Table td, th{
        border: none!important;
    }

    .Table:first-child{
        border-radius: 0.7rem!important;
    }

    @media Screen and (max-width: 1200px){
        width: 170%;
        margin-top: 2rem;
    
    }

    @media Screen and (max-width: 768px){
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18rem;
    }
`;

export const H3 = styled.h3`
    margin-bottom: 1rem;
    
`;