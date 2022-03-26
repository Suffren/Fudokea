import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useState } from 'react'

function Tips({ tips, onAddTip, onDelTip }) {
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
	function handleDelete(currTip) {
		const filteredTips = tips.filter(tip => tip.id !== currTip.id)
		setTipList(filteredTips)
		onDelTip(currTip)
	}

	return <div>
		<div>
			{tipList.map((tip, id) =>
				<li key={id}>
					<Link
						to={`/tips/${tip.id}`}
						key={tip.id}
						state={tip}>
						{tip.title}
					</Link>
					
					<button onClick={() => handleDelete(tip)}>Delete</button>
				</li>
			)}
		</div>

		<Link to="/">Home</Link>
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