
import styled from "styled-components";
import { Link } from "react-scroll"


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => { return (primary ? "#01BF71" : "#010606") }};
    white-space: nowrap;
    padding: ${({ big }) => { return (big ? "14px 48px" : "12px 30px") }};

    color: ${({ dark }) => { return (dark ? "#010606" : "#fff") }};
    font-size: ${({ fontBig }) => { return (fontBig ? "20px" : "16px") }};
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;  
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({ primary }) => {
        return (primary ? "#fff" : "#01BF71");
    }};   
    }

    `