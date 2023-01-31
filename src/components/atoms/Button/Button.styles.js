import styled from 'styled-components';

export const StyledButton = styled.div`
    background: transparent;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px 10px 5px 20px;;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover{
        -webkit-box-shadow: 2px 2px 5px 2px #B1B1B1; 
        box-shadow: 2px 2px 5px 2px #B1B1B1;
        border-radius: 10px 5px 5px 5px;;
    }
`