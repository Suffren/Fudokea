import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { useState } from 'react'

function Tips({ tips, onAddTip, onDelTip }) {
	const [titleTip, setTitleTip] = useState("")
	const [contentTip, setContentTip] = useState("")

	const submitTip = function() {
		const tip = { title: titleTip, content: contentTip}
		onAddTip(tip)
		setTitleTip("")
		setContentTip("")
	}

	function handleTitleChange(event) {
		setTitleTip(event.target.value)
	}
	function handleContentChange(event) {
		setContentTip(event.target.value)
	}

	return <div>
		<div>
			{tips.map((tip, id) =>
				<li key={id}>
					<NavLink
						to={`/tips/${tip.id}`}
						key={tip.id}
						state={tip}>
						{tip.title}
					</NavLink>
					
					<button onClick={() => onDelTip(tip)}>Delete</button>
				</li>
			)}
		</div>

		<div>
			<input value={titleTip} onChange={handleTitleChange} type="text" />
			<input value={contentTip} onChange={handleContentChange} type="text" />
			<button onClick={submitTip}>Add</button>
		</div>
	</div>
}

const TipsStore = connect(
	state => ({
		tips: state.tips
	}),
	dispatch => ({
		onAddTip: tip => dispatch({
			type: 'ADD_TIP_ACTION',
			payload: { ...tip, read: false }
		}),
		onDelTip: tip => dispatch({
			type: 'DELETE_TIP_ACTION',
			payload: tip
		})
	})
)(Tips)
export default TipsStore