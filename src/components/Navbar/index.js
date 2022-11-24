import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  LogoutBtn,
  LogoImage,
} from "./NavbarElements";

const Navbar = () => {
  const navigate = useNavigate();

  function removeUser(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <Nav>
            <Link to="/home">
              <LogoImage src={require("./images/logo.png")} />
            </Link>
            <Link>
              <NavLogo>myLMS</NavLogo>
            </Link>
          </Nav>
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <LogoutBtn onClick={removeUser}>Logout</LogoutBtn>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
