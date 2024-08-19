import React from "react";
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import './css/Input.css';

export const Input = ({title, type, value, onclick}) => {
    if( title === "CPF") {
        return(
            <label>{title}:
                <InputMask
                    mask="999.999.999-99" // Máscara do CPF
                    value={value}
                    onChange={onclick}
                    required
                    >
                    {(inputProps) => <input {...inputProps} type="text" />}
                </InputMask>
            </label>
        );
    }
    else{
        return (
            <label>
                {title}:
                <input
                    type={type}
                    value={value}
                    onChange={onclick}
                    required
                />
            </label>
        );
    }
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onclick: PropTypes.func.isRequired
};