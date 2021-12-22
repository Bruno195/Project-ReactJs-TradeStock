import styledComponents from "styled-components";
import {FaTimes} from "react-icons/fa"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

export const SidebarContainer = styledComponents.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styledComponents(FaTimes)`

    color: #fff


`

export const Icon = styledComponents.div`

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;


`

export const SidebarWrapper = styledComponents.div`

color: #fff;
margin: 2rem;


`



export const SideBtnWrap = styledComponents.div`

    display: flex;
    justify-content: center;
    margin-top: -4rem;
   


`
export const SidebarRouter = styledComponents(LinkR)`

    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
   

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;


    }
`

export const SidebarMenu = styledComponents.ul`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    margin-top: 6rem; 
    
   


    @media screen and (max-width: 480px){
        grid-template-rows: (6, 60px)
    }

`

export const SidebarLink = styledComponents(LinkS)`

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    cursor: pointer;
    
    
    
    &:hover {
        color: #01bf71;
        transition: 0.2 ease-in-out;

    }
`