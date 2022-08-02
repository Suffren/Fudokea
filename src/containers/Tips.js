import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTips } from "../ducks/tips/reducer";

export default function Tips() {
  const count = useSelector((state) => state.tips.count);
  const tips = useSelector((state) => state.tips.data);
  const isLoading = useSelector((state) => state.tips.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTips());
  }, []);

  return (
    <StyledContent>
      {!isLoading && (
        <>
          <p>{count} conseils</p>
          <div className="card" style={{ width: "25rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{tips.length > 0 && tips[1].title}</h5>
              <p className="card-text">{tips.length > 0 && tips[1].content}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/tips/create")}
              >
                Ajouter un conseil
              </button>
            </div>
          </div>
        </>
      )}
      {isLoading && <div>Chargement...</div>}
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
