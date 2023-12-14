import React from "react";
import * as C from "./styles";

const Input = ({type,placeholder,value,onChange}:
    {type:string, placeholder:string,value:string,onChange: React.ChangeEventHandler<HTMLInputElement>}) => {
    return (
    <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}    
    />
    );
};

export default Input;