import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="nav-items">
      <Link to="/" className="hover:text-orange-500">
        <h3>Development</h3>
      </Link>
      <Link to="/" className="hover:text-orange-500">
        <h3>Consulting</h3>
      </Link>
      <Link to="/about" className="hover:text-orange-500">
        <h3>About Us</h3>
      </Link>
      <Link to="/contact" className="hover:text-orange-500">
        <h3>Contact</h3>
      </Link>
    </header>
  );
};

export default Header;
