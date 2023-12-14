import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #f0f2f5;
        font-family: 'Inter', sans-serif;
    }

    .App{
        background: linear-gradient(
            106.37deg,
            #ffe1bc 29.63%,
            #ffcfd1 51.55%,
            #f3c6f1 90.85%
        );
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .AppGlass{
        display: grid;
        height: 97%;
        width: 97%;
        border-radius: 2rem;
        background-color: rgba(255,255,255,0.54);
        overflow: hidden;
        grid-template-columns: 11rem auto 11rem;
        gap:10px

    }

    @media Screen and (max-width: 1200px) {
        .AppGlass{
            grid-template-columns: 10% 50% auto;
            overflow-y: scroll;
        }
    }

    @media Screen and (max-width: 768px){
    
        .AppGlass{
            grid-template-columns: 1fr;
        }

        .AppGlass::-webkit-scrollbar{
            display: none;
        }
    }

    

`;

export default GlobalStyle