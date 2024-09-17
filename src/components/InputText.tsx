import React from "react";

type InputTextProps = {
    label: string;
    type?: "text" | "password";
}

function InputText({label, type = "text"}: InputTextProps){
    return<div>
        <label>{label}</label>
        <input type={type}/>
    </div>
}
export default InputText;