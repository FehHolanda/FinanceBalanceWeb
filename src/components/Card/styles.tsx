import styled from "styled-components";
import { ColorType } from "../../types/Card";
import { motion } from "framer-motion";

export const Card = styled.div`
    &{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
    }

    @media Screen and (max-width: 1200px){
        height: 8rem;
        
    }
`;

export const CardItem = styled.div`

`;

type CardProps = {
    $color:ColorType,
    onClick: Function,
}

export const CompactCard = styled(motion.div)<CardProps>`
    background: ${({ $color }) => $color.backGround};
    box-shadow:  ${({ $color }) => $color.boxShadow};
    display: flex;
    flex:1;
    height: 8rem!important;
    border-radius: 1rem;
    color: white;
    position: relative;
    cursor: pointer;
    padding: 1rem;
    

    &:hover {
        box-shadow: none;

    }

    @media Screen and (max-width: 768px){
        width: 90%;
        left: 15px;
    }
`;

export const RadialBar = styled.div`
    & {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;        
    }

    .CircularProgressbar{
        width: 4rem!important;
        overflow: visible;
    }

    .CircularProgressbar-path{
        stroke: white!important;
        stroke-width: 12px!important;
        filter: drop-shadow(2px 4px 6px white);
    }

    .CircularProgressbar-trail{
        display: none;
    }

    .CircularProgressbar-text{
        fill: white!important;
    }

    span{
        font-size: 17px;
        font-weight: bold;
    }

`;

export const Detail = styled.div`
    &{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    span:nth-child(1){
        font-size: 22px;
        font-weight: bold;
    }

    span:nth-child(2){
        font-size: 12px;
        }

`;

export const ExpandedCard = styled(motion.div)<CardProps>`
    background: ${({ $color }) => $color.backGround};
    box-shadow:  ${({ $color }) => $color.boxShadow};

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    flex:1;
    width: 75%;
    height: 70vh;
    z-index: 9;
    left: 13rem;
    border-radius: 1rem;
    padding: 1rem;

    span:nth-child(1){
        color: white;
        font-size: 26px;
        font-weight: bold;
        text-shadow: 0px 0px 15px white;

    }

    @media Screen and (max-width: 1200px){
        top: 2rem;
        height: 70vh;
        left: 6rem;
    }

    @media Screen and (max-width: 768px){
        width: 85%;
        height: 50%;
        top: 8rem;
        left: 15px;
    
    }
`;