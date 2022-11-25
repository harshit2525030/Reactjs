import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  Div,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  LogoutBtn,
  LogoImage,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();

  function removeUserData(e) {
    e.preventDefault(); // will not run till the 'removeUserData()' function triggered...
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <Div>
            <Link to="/home">
              <LogoImage src={require("./images/logo.png")} />
            </Link>
            <Link>
              <NavLogo>myLMS</NavLogo>
            </Link>
          </Div>
          <MobileIcon onClick={toggle}>
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
            <LogoutBtn onClick={removeUserData}>Logout</LogoutBtn>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
