import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useState } from 'react'

function Tips({ tips, onAddTip }) {
	const [newTip, setTip] = useState("")
	const [tipList, setTipList] = useState(tips)
	const submitTip = function() {
		const tip = { title: newTip, id: tips.length + 1}
		onAddTip(tip)
		setTipList(tipList.concat(tip));
		setTip('')
	};
	function handleChange(event) {
		setTip(event.target.value);
	}
	return <div>
		<nav>
			{tipList.map((tip, id) =>
				<li key={id}>
					<Link
						to={`/tips/${tip.id}`}
						key={tip.id}>
						{tip.title}
					</Link>
				</li>
			)}
		</nav>

		<Link to="/">Home</Link>
		<div>
			<input value={newTip} onChange={handleChange} type="text" />
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