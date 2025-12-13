import "../styles/navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-name">
                <h2>React</h2>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Popular Games</Link>
                <Link to="/upcoming" className="navbar-link">Upcoming</Link>
            </div>
        </nav>
    )
}

export default Navbar