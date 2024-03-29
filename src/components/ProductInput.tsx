import { useState } from "react";
import styled from "styled-components";
import DotButtons from "../ui/DotButtons";
import { FoodType } from "../containers/FoodsHistory";

type ProductType = {
  addProduct: (f: FoodType) => void
};

export default function ProductInput({ addProduct }: ProductType) {
  const [productName, setProductName] = useState("");
  const [nutriScore, setNutriScore] = useState("");

  function handleSubmit() {
    addProduct({ product: productName, nutri_score: nutriScore });
    setProductName("");
    setNutriScore("");
  }

  return (
    <>
      <label htmlFor="addProductInput">Nouvelle entrée</label>
      <StyledInlineDiv>
        <input
          type="email"
          className="form-control"
          id="addProductInput"
          aria-describedby="addProduct"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <DotButtons handleClick={setNutriScore} nutriScore={nutriScore} />
        <button className="btn btn-outline-secondary" onClick={handleSubmit}>
          +
        </button>
      </StyledInlineDiv>

      <small id="addProduct" className="form-text text-muted" hidden>
        Un produit ne doit pas contenir de caractère spécial
      </small>
    </>
  );
}

const StyledInlineDiv = styled.div`
  display: flex;
  align-items: center;
`;
