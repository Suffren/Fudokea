const users = [
  {
    id: 1,
    name: "Régis",
    lastname: "VITEL",
  },
];
export const ADD_USER_ACTION = "ADD_USER_ACTION";
export const DELETE_USER_ACTION = "DELETE_USER_ACTION";

function UsersReducer(state = users, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default UsersReducer;
