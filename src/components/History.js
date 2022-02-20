import { Link } from "react-router-dom";

function History() {
  const h = {'name': 'fdfsfdf'};
  return <div>
    <p>History</p>
    <Item derp={h} />
    <Link to="/tips">Tips</Link>
  </div>
}

function Item({derp}) {
  return <div>
    hello {derp.name} --
  </div>
}

export default History;