import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text, variant, round, square }) => {
    return (
        <StyledButton text={text} variant={variant} round={round} square={square}>
            {text}
        </StyledButton>
    );
}

export default Button;
