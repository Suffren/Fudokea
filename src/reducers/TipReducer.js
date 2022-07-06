import uuid from "uuid";

const tips = [
  {
    id: 0,
    title: "Title here",
    content: "lorem ipsum",
    read: true,
  },
  {
    id: 1,
    title: "Title two",
    content: "lorem ipsum",
    read: false,
  },
];
export const ADD_TIP_ACTION = "ADD_TIP_ACTION";
export const DELETE_TIP_ACTION = "DELETE_TIP_ACTION";

function TipReducer(state = tips, action) {
  switch (action.type) {
    case ADD_TIP_ACTION:
      return state.concat({ ...action.payload, id: state.length, content: "" });
    case DELETE_TIP_ACTION:
      return state.filter((tip) => tip.id !== action.payload.id);
    default:
      return state;
  }
}

export default TipReducer;
