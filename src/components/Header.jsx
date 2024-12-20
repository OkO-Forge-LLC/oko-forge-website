import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-container">
      <div className="nav-items">
        <h3 className="logo text-orange-500 text-2xl">OkO-Forge</h3>
        <button
          className="burger-menu md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        <nav
          className={`nav-links ${isOpen ? "open" : ""} md:flex md:gap-8`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/development" onClick={() => setIsOpen(false)}>
            Development
          </Link>
          <Link to="/consulting" onClick={() => setIsOpen(false)}>
            Consulting
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
