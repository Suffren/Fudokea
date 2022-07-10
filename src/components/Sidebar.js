import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import Tips from "../containers/Tips";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledUl>
        <li>
          <span style={{ marginRight: "20px" }}>
            <FontAwesomeIcon icon={faCarrot} />
          </span>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <span style={{ marginRight: "20px" }}>
            <FontAwesomeIcon icon={faBullhorn} />
          </span>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/Tips"
            component={Tips}
          >
            Tips
          </NavLink>
        </li>
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
