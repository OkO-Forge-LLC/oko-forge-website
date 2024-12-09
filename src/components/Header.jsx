import {Link} from "react-router-dom"
import "../css/Header.css";

const Header = () => {
  return (
   
      <header className="nav-items">
        <Link to = "/"><h3>Development</h3></Link>
        <Link to = "/"><h3>Consulting</h3></Link>
        <Link to = "/about"><h3>About Us</h3></Link>
        <Link to = "/contact"><h3>Contact</h3></Link>
      </header>
   
  );
};

export default Header;
