import React from "react";

export const Button = ({onClick, title, className, type}) => {
    return (
        <button type={type} className={className} onClick={onClick}>{title}</button>
    );
};