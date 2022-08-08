import React, { useState } from "react";
import styled from "styled-components";

export default function ProductInput({ addProduct }) {
  const [productName, setProductName] = useState("");
  const [nutriScore, setNutriScore] = useState("");

  function handleSubmit(e) {
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
        <StyledUl>
          <li
            className={`btn btn-success ${nutriScore === "A" ? "active" : ""}`}
            onClick={() => setNutriScore("A")}
          ></li>
          <li
            className={`btn btn-warning ${nutriScore === "C" ? "active" : ""}`}
            onClick={() => setNutriScore("C")}
          ></li>
          <li
            className={`btn btn-danger ${nutriScore === "E" ? "active" : ""}`}
            onClick={() => setNutriScore("E")}
          ></li>
        </StyledUl>
        <button className="btn btn-outline-secondary" onClick={handleSubmit}>+</button>
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

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  & li {
    padding: 0px;
    margin: 5px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
    border: none;
    &.active {
      border: 2px solid lightgrey !important;
    }
  }
`;
