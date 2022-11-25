import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  Div,
  LogoImage,
  NavLogo,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  function removeUserData(e) {
    e.preventDefault(); // will not run till the 'removeUserData()' function triggered...
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <Div>
          <Link to="/home">
            <LogoImage src={require("./images/logo.png")} />
          </Link>
          <Link>
            <NavLogo>myLMS</NavLogo>
          </Link>
        </Div>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/discover">Discover</SidebarLink>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/services">Services</SidebarLink>
            <SidebarLink to="/contact">Contact Us</SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute onClick={removeUserData}>Logout</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
