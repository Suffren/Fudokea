import React, { useState } from "react";
import styled from "styled-components";

export default function AddProduct({addProduct}) {
  const [productName, setProductName] = useState('');
  const [nutriScore, setNutriScore] = useState(1);

  function handleProductName(e) {
    setProductName(e.target.value)
  }

  return (
    <StyledSidebar>
      <label htmlFor="addProductInput">Nouvelle entrée</label>
      <input type="email" className="form-control" id="addProductInput" aria-describedby="addProduct" value={productName} onChange={handleProductName} />
      <small id="addProduct" className="form-text text-muted" hidden>Un produit ne doit pas contenir de caractère spécial</small>

      <button onClick={() => addProduct({ product: productName, nutri_score: nutriScore })}>+</button>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  width: 15rem;
  background-color: white;
  font-weight: bold;
`;

