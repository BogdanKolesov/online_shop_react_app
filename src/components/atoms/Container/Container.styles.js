import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: ${props => props.type === 'full' ? "100%" : props.type === 'half' ? '50%' : props.type === 'container' ? '70%' : 'auto'};
    display: flex;
    flex-direction: ${props => props.dir === 'col' ? 'column' : 'row'};
    align-items: ${props => props.align === 'center' ? 'center' : props.align};
    justify-content: ${props => props.justify === 'center' ? 'center' : props.justify};
    background-color: ${props => props.bg == true ? props.bg : 'red'};
`