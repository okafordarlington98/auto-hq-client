import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/event">
        <button>Events</button>
      </Link>

      <Link to="/forum">
        <button>Forums</button>
      </Link>

      <Link to="/Signup">
        <button>Signup</button>
      </Link>

      <Link to="/Login">
        <button>Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;