import React from "react";
import './css/Button.css';

export const Button = ({onClick, title, className, type}) => {
    return (
        <button type={type} className={className} onClick={onClick}>{title}</button>
    );
};