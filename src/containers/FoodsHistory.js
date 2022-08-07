import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addFood } from "../ducks/foods/reducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AddProduct from "../components/AddProduct";

function FoodsHistory() {
  const dispatch = useDispatch();
  const [showAddProduct, setShowAddProduct] = useState(false);

  function HandleAddProduct(product) {
    dispatch(addFood({ ...product, scanned: false }));
  }

  return (
    <StyledContent>
      <div className="card">
        <div className="card-body">
          <StyledWeekHeader>
            <h5 className="card-title">Semaine 41</h5>
            <span>85 kg</span>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => setShowAddProduct(true)}
            />
          </StyledWeekHeader>
          <p className="card-text">Beaucoup de dérapges, plein de fêtes</p>
          <p className="card-text">3 trajets en vélotaff</p>
          <div>
            {showAddProduct && <AddProduct addProduct={HandleAddProduct} />}
          </div>
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
  & .card-text {
    padding-bottom: 15px;
    border-bottom: 1px solid grey;
  }
`;

const StyledWeekHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    margin: 0;
  }
`;
