import styled from "styled-components";

export const User = styled.div`
  background: #18ecdc;
  display: flex;
  justify-content: center;
  height: 632px;
  position: relative;
  z-index: 1;
`;

export const UserContainer = styled.div`
  width: 80%;
  background: #fff;
  border-radius: 30px;
`;

export const UserProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;

  &:hover {
    box-shadow: 0 0 0 12px white;
    transform: scale(0.7);
  }
`;

export const UserWaveSvg = styled.img`
  position: relative;
  z-index: 1;
`;
