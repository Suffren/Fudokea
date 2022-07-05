import { NavLink } from "react-router-dom";
import Tips from '../containers/Tips';

export default function Sidebar() {
    return (
        <div style={{ width: '20rem' }}>
            <ul>
                <li>
		            <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    
		            <NavLink to="/Tips" component={Tips}>Tips</NavLink>
                </li>
            </ul>
        </div>
    )
}