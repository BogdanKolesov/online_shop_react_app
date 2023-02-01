import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text, variant, form, size }) => {
    return (
        <StyledButton text={text} variant={variant} form={form} size={size}>
            {text}
        </StyledButton>
    );
}

export default Button;
