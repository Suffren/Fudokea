import { useParams } from "react-router-dom";

function Tip() {
    const params = useParams();
	return <div>
		Hey, tip {params.tipId}
	</div>
}
export default Tip;