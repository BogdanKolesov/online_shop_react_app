import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: ${props => props.type === 'full' ? "100%" : props.type === 'half' ? '50%' : props.type === 'container' ? '70%' : 'auto'};
    display: flex;
    flex-direction: ${props => props.dir === 'col' ? 'column' : 'row'};
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    background-color: ${props => props.bg ? props.bg : 'red'};
`