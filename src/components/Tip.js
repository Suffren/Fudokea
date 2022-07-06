import { useParams, useLocation } from "react-router-dom";

function Tip({ onDeleteTip }) {
  const params = useParams();
  const location = useLocation();
  const tip = location.state;

  return (
    <div>
      <h1>{tip.title}</h1>
      <p>{tip.content}</p>
      Hey, tip {params.tipId} here
      <button onClick={() => onDeleteTip(params)}>Supprimer</button>
    </div>
  );
}

export default Tip;
