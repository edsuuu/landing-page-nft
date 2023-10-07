import React from "react";
import './button.scss';

export const Button = ({ text, className }) => {
    return <button className={className}>{text}</button>;
};