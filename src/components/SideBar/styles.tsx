import { motion } from "framer-motion";
import styled from "styled-components";


type PropsMenuItem = {
    $isSelected: boolean;
}

export const SideBar = styled(motion.div)`
    &{
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 4rem;
        transition: all 300ms ease;
    }

    @media Screen and (max-width: 768px){
       position: fixed;
       z-index: 9;
       background-color: #ffe0e0;
       padding-right: 1rem;
       height: 100%;
    
      Menu MenuItem:last-child{
        position: relative;
        margin-top: 2rem;
      }      

    }   
    
`;


export const Logo = styled.div`
    &{
        display: flex;
        height: 5rem;
        font-weight: bold;
        font-size: 22px;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        height: 4%; 
        color: pink;
    }

    @media Screen and (max-width: 1200px){
        display: none;
    }

    @media Screen and (max-width: 768px){
        display: block;
        padding-left : 5rem;
       }

`;

export const Menu = styled.div`
    &{
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media Screen and (max-width: 1200px){
        span{
            display: none;
        }
    }

`;

export const MenuItem = styled.div<PropsMenuItem>`
    &{
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 2.5rem;
        margin-left: 2rem;
        position: relative;
        transition: all 300ms ease;
        font-size: 14px;
        border-radius: 0.7rem;
    }

    &:hover {
        cursor: pointer;
    }    

    @media Screen and (max-width: 768px){
        span{
            display: block;
            
        }

    }

    ${({ $isSelected }) => {
        if ($isSelected === true)
            return (`
            & {
                margin-left: 0;            
                background-color:'#F799a354';
            }
            &::before {
                content: '';
                width: 8px;
                height: 100%;
                background: pink;
                margin-right: calc(1rem-8px);
            }`
            );
    }};

`;

type PropsBars = {
    $isExpanded: boolean;
    onClick: Function;

}

export const Bars  = styled.div<PropsBars>`

    display: none;

    @media Screen and (max-width: 768px){
        display: flex;
        position: fixed;
        top: 4rem;
        z-index:9;
        background-color: #ffe0e0;
        padding: 10px;
        border-radius: 10px;
    }

    ${({$isExpanded})=>{
        
        if($isExpanded === true) {
            return (`left:45%`);
        }
        else return(`left:5%`);
        
    }}
`
