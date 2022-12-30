import { useState } from "react";
import styled from "styled-components";
import { FoodType } from "../containers/FoodsHistory";

export default function Food(prop: FoodType) {
  const [food, setFood] = useState("");

  function handleEdit() {
    setFood("");
  }

  return (
    <>
      <StyledInlineDiv>
        <span>{prop.product}</span>
        <span>{prop.nutri_score}</span>
        <button className="btn btn-outline-secondary" onClick={handleEdit}>
          -
        </button>
      </StyledInlineDiv>
    </>
  );
}

const StyledInlineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
