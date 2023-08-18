import { LOGO_URL } from "./Constant";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
        </div>
        </div>
    )
}

export default Header;

