import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000025;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 0px 10px 1px #000025;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const LogoImage = styled.img`
  padding: 20px 8px 20px 0px;
  width: 40px;
  margin-left: 24px;
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    transition: 1s all ease;
    font-size: 2rem;
  }

  &:hover {
    color: #18ecdc;
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    padding: 5px;
  }

  &:hover {
    color: #18ecdc;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 40px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.4rem;

  &.active {
    border-bottom: 3px solid #18ecdc;
    color: #18ecdc;
    text-decoration: underline;
  }

  &:hover {
    font-size: 1.4rem;
    transition: all 0.2s ease-in-out;
    color: #18ecdc;
    border-bottom: 3px solid #18ecdc;
    text-decoration: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileDiv = styled.div`
  /* padding: 20px 8px 20px 0px; */
  width: 40px;
  margin-right: 24px;
  color: #fff;

  &:hover {
    color: #18ecdc;
  }
`;

export const LogoutBtn = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 8px 20px;
  color: #010606;
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    color: #010601;
    background: #18ecdc;
    text-decoration: none;
  }
`;
