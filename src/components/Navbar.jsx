import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>

            <div className="logo">
                <Link to="/">AUTO HQ</Link>
            </div>

            <div className="links">

                <Link to="/">Home</Link>

                <Link to="/events">Events</Link>

                <Link to="/forums">Forums</Link>

            </div>

            <div className="auth">

                <Link to="/login">Login</Link>

                <Link to="/signup">Signup</Link>

            </div>

        </nav>
    );
}

export default Navbar;