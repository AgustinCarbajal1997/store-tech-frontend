import { useState } from "react";
import NAV_BAR_ITEMS from "./NavBarItems";
import { Link } from "react-router-dom";
import InputSearch from "../generalSearch/InputSearch";
import { Fade as Hamburger } from "hamburger-react";
import LoginButton from "./LoginButton";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  return (
    <header className="header">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </div>
      <div className="header-options">
        <div
          className="logo-header"
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" />
          <span>Tech store</span>
        </div>
        <InputSearch />
        <LoginButton />
      </div>
      <nav style={{ left: isOpen ? "0%" : "-100%" }} className="nav-menu">
        {NAV_BAR_ITEMS.map((item, index) => (
          <Link to={item.href} className="nav-item" key={index}>
            {item.item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
