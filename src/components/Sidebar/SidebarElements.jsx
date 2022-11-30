import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000025;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #18ecdc;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  padding: 15px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-size: 1rem;
`;

export const LogoImage = styled.img`
  padding: 0px 8px 20px 0px;
  width: 40px;
  margin-left: 10px;
`;

export const NavLogo = styled.div`
  color: #18ecdc;
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #18ecdc;
    text-decoration: none;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 55px);
  text-align: center;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #15cdfc;
    color: #18ecdc;
    text-decoration: underline;
  }

  &:hover {
    font-size: 1.7rem;
    transition: all 0.2s ease-in-out;
    color: #18ecdc;
    text-decoration: 2px underline;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
  /* padding-left: 12px; */
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 25px;
  color: #010606;
  font-weight: bold;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #18ecdc;
    text-decoration: none;
  }
`;
