import React, { useState } from "react";
import styled from "styled-components";

export default function AddProduct({ addProduct }) {
  const defaultNutriScores = [
    { id: 2, score: "C", class: "warning", active: false },
    { id: 5, score: "E", class: "danger", active: true },
  ];

  const [productName, setProductName] = useState("");
  const [nutriScores, setNutriScores] = useState(defaultNutriScores);

  function handleSubmit(e) {
    const selectedNutriScore = nutriScores.find((n) => n.active);
    addProduct({ product: productName, nutri_score: selectedNutriScore.score });
    setProductName("");
    setNutriScores(defaultNutriScores);
  }

  function handleNutriScore(nutriScoreID) {
    setNutriScores(
      nutriScores.map((n) =>
        n.id === nutriScoreID ? { ...n, active: true } : { ...n, active: false }
      )
    );
  }

  return (
    <StyledSidebar>
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
          {nutriScores.map((nutri) => (
            <li
              key={nutri.id}
              className={`btn btn-${nutri.class} ${
                nutri.active ? "active" : ""
              }`}
              onClick={() => handleNutriScore(nutri.id)}
            ></li>
          ))}
        </StyledUl>
      </StyledInlineDiv>
      <button onClick={handleSubmit}>+</button>
      <small id="addProduct" className="form-text text-muted">
        Un produit ne doit pas contenir de caractère spécial
      </small>
    </StyledSidebar>
  );
}

const StyledInlineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSidebar = styled.div`
  width: 15rem;
  background-color: white;
  font-weight: bold;
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
    &.active {
      border: 2px solid lightgrey !important;
    }
  }
`;
