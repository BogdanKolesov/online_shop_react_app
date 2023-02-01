import styled from 'styled-components';

export const StyledButton = styled.div`
    background: transparent;
    padding: 10px;
    padding-right: ${props => props.size === 'big' ? "50px" : "10px"};
    padding-left: ${props => props.size === 'big' ? "50px" : "10px"};
    border: 1px solid;
    border-radius: ${props => props.form === 'round' ? "15px 10px 10px 5px" : "5px"};
    border-color: ${props => props.variant === 'primary' ? "#18db11" : "#FF5733"};
    color: ${props => props.variant === 'primary' ? "#18db11" : "#FF5733"};
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        -webkit-box-shadow: 2px 2px 5px 2px #B1B1B1; 
        box-shadow: 2px 2px 5px 2px #B1B1B1;
        border-radius: 10px 5px 5px 5px;
    }
`