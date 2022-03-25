import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useState } from 'react'

function Tips({ tips, onAddTip }) {
	const [titleTip, setTitleTip] = useState("")
	const [contentTip, setContentTip] = useState("")
	const [tipList, setTipList] = useState(tips)

	const submitTip = function() {
		const tip = { title: titleTip, id: tips.length + 1, content: contentTip}
		onAddTip(tip)
		setTipList(tipList.concat(tip));
		setTitleTip('')
		setContentTip('')
	}

	function handleTitleChange(event) {
		setTitleTip(event.target.value)
	}
	function handleContentChange(event) {
		setContentTip(event.target.value)
	}

	return <div>
		<nav>
			{tipList.map((tip, id) =>
				<li key={id}>
					<Link
						to={`/tips/${tip.id}`}
						key={tip.id}
						state={tip}>
						{tip.title}
					</Link>
				</li>
			)}
		</nav>

		<Link to="/">Home</Link>
		<div>
			<input value={titleTip} onChange={handleTitleChange} type="text" />
			<input value={contentTip} onChange={handleContentChange} type="text" />
			<button onClick={submitTip}>Add</button>
		</div>
	</div>
}

const TipStore = connect(
	state => ({
		tips: state.tips
	}),
	dispatch => ({
		onAddTip: tip => dispatch({
			type: 'ADD_TIP_ACTION',
			payload: { ...tip, read: false }
		})
	})
)(Tips)
export default TipStore