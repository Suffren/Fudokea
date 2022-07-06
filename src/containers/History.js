import { Link } from "react-router-dom";

import { connect } from "react-redux";

function History() {
  const h = { name: "fdfsfdf" };
  return (
    <div style={{ flex: 1 }}>
      <p>History</p>
      <Item derp={h} />
      <Link to="/tips">Tips</Link>
    </div>
  );
}

function Item({ derp }) {
  return <div>hello {derp.name} --</div>;
}

const FoodHitoryStore = connect(
  (state) => ({
    foods: state.foods,
  }),
  (dispatch) => ({})
)(History);
export default FoodHitoryStore;
