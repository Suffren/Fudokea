import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addFood, getFoods } from "../ducks/foods/reducer";
import { RootState } from "../reducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ProductInput from "../components/ProductInput";
import Food from "../components/Food";
export type FoodType = {
  create_date?: number,
  nutri_score:string,
  product: string,
  scanned?:boolean,
  user_id?: string,
};

function FoodsHistory() {
  const dispatch = useDispatch();
  const foods = useSelector((state: RootState) => state.foods.data);
  const [showAddProduct, setShowAddProduct] = useState(false);

  function HandleAddFood(food: FoodType) {
    dispatch(addFood({ ...food, scanned: false }));
  }

  useEffect(() => {
    if (foods) {
      dispatch(getFoods());
    }
  }, []);

  return (
    <StyledContent>
      <div className="card" style={{ minWidth: "500px" }}>
        <div className="card-body">
          <StyledWeekHeader>
            <h5 className="card-title">Semaine 41</h5>
            <span>85 kg</span>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => setShowAddProduct(true)}
            />
          </StyledWeekHeader>
          <p className="card-text mt-3">
            Beaucoup de dérapages, plein de fêtes
          </p>
          <p className="card-text">3 trajets en vélotaff</p>
          <div>
            {foods.length > 0 &&
              foods.map((food) => (
                <div key={food.id}>
                  <Food {...food} />
                </div>
              ))}
            {showAddProduct && <ProductInput addProduct={HandleAddFood} />}
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
`;

const StyledWeekHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    margin: 0;
  }
`;
