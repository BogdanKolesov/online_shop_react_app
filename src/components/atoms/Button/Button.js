import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text, variant, form, size, font }) => {
    return (
        <StyledButton text={text} variant={variant} form={form} size={size} font={font}>
            {text}
        </StyledButton>
    );
}

export default Button;
