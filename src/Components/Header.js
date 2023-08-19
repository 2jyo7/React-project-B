import { LOGO_URL } from "./Constant";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
        <ul>
            <li>
                <Link to="/">Home</Link>
                </li>
            <li>
            <Link to="/about">About</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Header;

