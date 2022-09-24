import React from "react";
import { faCarrot, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import NavItem from './NavItem';

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledUl>
        <NavItem icon={faCarrot} path="/" label="Repas" />
        <NavItem icon={faBullhorn} path="/Tips" label="Tips" />
      </StyledUl>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  width: 15rem;
  background-color: white;
  font-weight: bold;
`;

const StyledUl = styled.ul`
  padding: 15px;
  & li {
    display: flex;
    align-items: center;
    height: 45px;
    width: 100%;
    border-radius: 5px;
  }
`;
