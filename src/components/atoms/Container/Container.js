import React from 'react'
import { StyledContainer } from './Container.styles'

export default function Container(type, dir, align, justify, bg, children) {
    return (
        <StyledContainer type={type} dir={dir} align={align} justify={justify} bg={bg}>
            {children}
        </StyledContainer>
    )
}
