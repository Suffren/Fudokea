import { Link } from "react-router-dom";

const tips = [
	{
		"id": 1,
		"title": "Title here",
		"content": "lorem ipsum"
	},
	{
		"id": 2,
		"title": "Title two",
		"content": "lorem ipsum"
	}
]

function Tips() {
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

export default Tips