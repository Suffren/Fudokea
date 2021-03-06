import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Tips() {
  const count = useSelector((state) => state.tips.count);
  const tips = useSelector((state) => state.tips.data);
  const navigate = useNavigate();

  return (
    <StyledContent>
      <p>{count} conseils</p>
      <div className="card" style={{ width: "25rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => navigate("/tips/create")}
          >
            Ajouter un conseil
          </a>
        </div>
      </div>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
