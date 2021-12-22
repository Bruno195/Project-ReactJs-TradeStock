import React from 'react'
import {
    SidebarContainer, CloseIcon, Icon,
    SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRouter, SidebarMenu
} from "./SidebarElement"

const index = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/signin">Sign In</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default index
