import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItem({icon, path, label}) {
  return (
    <li>
      <span style={{ marginRight: "20px" }}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <NavLink
        className={({ isActive }) => (isActive ? "is-active" : "")}
        to={path}
      >
        {label}
      </NavLink>
    </li>
  );
}