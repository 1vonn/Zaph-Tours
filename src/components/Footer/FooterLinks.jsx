import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
const FooterLinks = () => {
    return(
        <section className="footer-content">
            <div className="footer-content-links">
                <div className="quick-links">
                <h2 className="header-title">Quick Links</h2>
            <nav className="header-nav">
                <ol className="quick-link-list">
                    <li className="quick-link-item"><Link to="/">Home</Link></li>
                    <li className="quick-link-item"><Link to="/destination">Destination</Link></li>
                    <li className="quick-link-item"><Link to="/tripTypes">Trip Types</Link></li>
                    <li className="quick-link-item"><Link to="/contactUs">Contacts</Link></li>
                </ol>
            </nav>
                </div>
                <div className="social-links">
                    <h2 className="sub-title">Social Links</h2>
                    <div className="social-media">
                    <div className="fb-icon"><a href=""><IoLogoFacebook /></a></div>
                    <div className="twitter-icon"><a href=""><FaTwitter /></a></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default FooterLinks;