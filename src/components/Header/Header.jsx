import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return(
        <header >
            < div className="header-list">
            <h2 className="header-title">Zaph Tours</h2>
            <nav className="header-nav">
                <ol className="header-nav-list">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><Link to="/destination">Destination</Link></li>
                    <li className="header-nav-item"><Link to="/tripTypes">Trip Types</Link></li>
                    <li className="header-nav-item"><Link to="/contactus">Contacts</Link></li>
                </ol>
            </nav>
            </div>
        </header>
    )
}
export default Header