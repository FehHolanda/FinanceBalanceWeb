import { useState } from "react";
import { CardType } from "../../types/Card";
import * as C from "./styles";

import { LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css' 

const Card = (prop: CardType) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <LayoutGroup id={prop.name}>
           {
            expanded? <ExpandedCard
                $card = {prop}
                $setExpanded = {() => setExpanded(false)}
            /> : <CompactCard 
                $card = {prop}
                $setExpanded = {() => setExpanded(true)}
                />
           }
        
        </LayoutGroup>
    );
};

type CardProps = {
    $card:CardType,
    $setExpanded:Function,
}

const ExpandedCard = ({$card,$setExpanded}:CardProps) => {
    return (
        <C.ExpandedCard 
            layoutId="expandableCard"
            $color = {$card.color} 
            onClick={$setExpanded}
        >
            <span>{$card.name}</span>
        </C.ExpandedCard>

    );

}

const CompactCard = ({$card,$setExpanded}:CardProps) => {
    return (
        <C.CompactCard 
            layoutId="expandableCard" 
            $color = {$card.color} 
            onClick={$setExpanded}
        >
            <C.RadialBar>
                <CircularProgressbar
                value={$card.barValue}
                text={`${$card.barValue}%`}
                />            
                <span>{$card.name}</span>
            </C.RadialBar>
            <C.Detail>
                <span>R${$card.value}</span>
                <span>Lançamentos</span>
            </C.Detail>           
        </C.CompactCard>    
    );
}



export default Card;