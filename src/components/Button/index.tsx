import React from "react";
import * as C from "./styles"

const Button = ({text,onClick}:
    {text:string,onClick:React.MouseEventHandler<HTMLButtonElement>}) => {
    return (
    <C.Button
        type = "button"
        onClick={onClick}>
        {text}
    </C.Button>
    );
};

export default Button;