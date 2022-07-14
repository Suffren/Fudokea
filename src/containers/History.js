import { connect } from "react-redux";

import CreateMeal from "./CreateMeal";

function History() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Mes écarts</h2>
      <CreateMeal />
      {/* <Link to="/tips">Tips</Link> */}
    </div>
  );
}

const FoodHitoryStore = connect(
  (state) => ({
    foods: state.foods,
  }),
  (dispatch) => ({})
)(History);
export default FoodHitoryStore;
