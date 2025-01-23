import styled from 'styled-components';

export const CustomButton = styled.button`
    background-color: #008000;
    color: #fff;
    box-shadow: 0px 3px 8px #000;
    border: none;
    padding: 8px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.1s ease;
    &:hover {
        background-color: #006400;
        color: #000;
    }
    &:active {
        transform: scale(0.95);
    }
`;