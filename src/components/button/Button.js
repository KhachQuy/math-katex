import React from 'react';
import './Button.css';

const STYLES =['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonCOlor}) => {
    const checkButtonStyle = STYLES.includes (buttonStyle) ?
    buttonStyle: STYLES[0]

    const checkButtonSize = SIZES.includes (buttonSize) ?
    buttonSize: SIZES[0]

    const checkButtonColor = COLOR.includes (buttonCOlor) ?
    buttonCOlor: null;
    return (
        <button className= {`btn ${checkButtonStyle} 
        ${checkButtonSize} ${checkButtonColor}`} onClick= {onClick}
        type={type}>{children}</button>
    )
}
