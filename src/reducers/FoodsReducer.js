const foods = [
	{
		"id": 1,
		"title": "Coca",
		"content": "Sucre !"
	},
	{
		"id": 2,
		"title": "Courge",
		"content": "lègume"
	}
]
export const ADD_TIP_ACTION = 'ADD_FOOD_ACTION';
export const DELETE_TIP_ACTION = 'DELETE_FOOD_ACTION';

function FoodsReducer(state = foods, action) {
	switch (action.type) {
		default:
			return state
	}
}

export default FoodsReducer;