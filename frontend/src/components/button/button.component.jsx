import React from "react";
import "./button.styles.scss";


const Button = ({onClick, children}) => (
    <button className="btn" type="button" onClick={onClick}>{children}</button>
);

export default Button;