const tips = [
	{
		"id": 1,
		"title": "Title here",
		"content": "lorem ipsum",
		"read": true
	},
	{
		"id": 2,
		"title": "Title two",
		"content": "lorem ipsum",
		"read": false
	}
]
export const ADD_TIP_ACTION = 'ADD_TIP_ACTION';
export const DELETE_TIP_ACTION = 'DELETE_TIP_ACTION';

function TipReducer(state = tips, action) {
	switch (action.type) {
		case DELETE_TIP_ACTION:
			const filteredTips = tips.filter(tip => tip.id !== action.payload)
			return [...filteredTips]
		case ADD_TIP_ACTION:
			return [...state, { ...action.payload, content: "" }]
		default:
			return state
	}
}

export default TipReducer;