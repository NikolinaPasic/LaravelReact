import { values } from 'lodash';
import React from 'react';
import './button.css';

export const Button = ({styleClass, value, onClick}) => (
    <button className={`btn ${styleClass}`} onClick={(event) => onClick(event)}>
        {value}
    </button>
);

export default Button;