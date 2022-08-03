import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addFood } from "../ducks/foods/reducer";

function FoodsHistory() {
  const dispatch = useDispatch();
  return (
    <StyledContent>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(addFood({ title: "Ah", content: "oh !", level: 3 }))
            }
          >
            Add food
          </button>
        </div>
      </div>
    </StyledContent>
  );
}

export default FoodsHistory;
const StyledContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
