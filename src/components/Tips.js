import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Tips({tips}) {
	return <div>
		<nav>
			{tips.map(tip =>
				<li>
					<Link
						to={`/tips/${tip.id}`}
						key={tip.id}>
							{tip.title}
					</Link>
				</li>
			)}
		</nav>
		
		<Link to="/">Home</Link>
	</div>
}

const TipStore = connect(
	state => ({
		tips: state.tips
	})
)(Tips)
export default TipStore