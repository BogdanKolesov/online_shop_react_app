import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text, primary, secondary, transparent, round }) => {
    return (
        <StyledButton text={text}>
            {text}
        </StyledButton>
    );
}

export default Button;
