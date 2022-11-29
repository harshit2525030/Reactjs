import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import {
  Div,
  LogoImage,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  ProfileDiv
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  // Logout functionality...
  function removeUserData(e) {
    e.preventDefault(); // will not run till the 'removeUserData()' function triggered...
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* --------Logo-------- */}
          <Div>
            <Link to="/home">
              <LogoImage src={require("./images/logo.png")} />
            </Link>
            <Link>
              <NavLogo>Krispace</NavLogo>
            </Link>
          </Div>
          {/* --------Logo End-------- */}

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          {/* --------Responsive Menu Button-------- */}
          <NavMenu>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          {/* --------Responsive Menu Button End-------- */}

          {/* ---------Dropdown Menu---------- */}
          <NavBtn>
            <Dropdown id="dropdown">
              <Dropdown.Toggle
                id="dropdown_toggle"
                variant={{ color: "#000025" }}
              >
                <ProfileDiv>
                  <FaUserCircle size={28}/>
                </ProfileDiv>
              </Dropdown.Toggle>

              <Dropdown.Menu id="dropdown_menu">
                <Dropdown.Item id="dropdown_profile_name">
                  Hi {user.Name}
                </Dropdown.Item>
                <Dropdown.Item id="dropdown_profile_email">
                  {user.Email}
                </Dropdown.Item>
                <div id="dropdown_hr_div">
                  <hr id="dropdown_hr" />
                </div>
                <Dropdown.Item href="#/action-2" id="dropdown_item">
                  Settings & Privacy
                </Dropdown.Item>

                <Dropdown.Item href="#/action-3" id="dropdown_item">
                  Notification
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2" id="dropdown_item_logout">
                  <div onClick={removeUserData}>Logout</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavBtn>
          {/* ---------Dropdown Menu End---------- */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
