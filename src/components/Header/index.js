import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link className="text" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="text" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="text" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
