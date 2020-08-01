/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;

    border: 1px solid var(--white);
    background-color: var(--black);
    border-radius: 4px;
    padding: 16px 24px;
    box-sizing: border-box;

    color: var(--white);
    font-style: normal;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;

    outline: none;
    display: inline-block;

    transition: opacity .3s;
  
    &:hover,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position:fixed;
        right: 0;
        text-align: center;
    }
 `;

export default Button;
