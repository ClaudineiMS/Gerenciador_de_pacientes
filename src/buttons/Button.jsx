import React from "react";
import PropTypes from 'prop-types';
import './css/Button.css';

export const Button = ({ onClick, title, className, type }) => {
    return (
        <button type={type} className={className} onClick={onClick}>{title}</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string
};

