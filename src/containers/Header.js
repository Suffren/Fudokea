import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../ducks/users/reducer";
import { useDispatch } from "react-redux";

export default function Header({ isConnected }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin() {
    navigate("/sign-up");
  }

  return (
    <StyledHeader>
      <div className="font-weight-bold">FUDOKEA</div>
      <div>
        {!isConnected && (
          <>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={handleLogin}
            >
              S'inscrire
            </button>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={() => navigate("/login")}
            >
              Se connecter
            </button>
          </>
        )}
        {isConnected && (
          <>
            <button
              type="button"
              className="btn btn-danger mr-3"
              onClick={() => dispatch(logout())}
            >
              Se déconnecter
            </button>
            <span style={{ marginRight: "10px" }}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span style={{ marginRight: "10px" }}>
              <FontAwesomeIcon icon={faGear} />
            </span>
          </>
        )}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;
  background-color: white;
  padding: 0px 15px;
`;
