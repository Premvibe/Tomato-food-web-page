import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink for smooth scrolling
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home"); // Set "home" as the default active state
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        {/* Default underline on Home */}
        <ScrollLink
          to="home-section" // Match with the id of the section
          smooth={true}
          duration={500}
          className={menu === "home" ? "active" : ""}
          onClick={() => handleMenuClick("home")}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="explore-menu" // Match with the id of the section
          smooth={true}
          duration={500}
          className={menu === "menu" ? "active" : ""}
          onClick={() => handleMenuClick("menu")}
        >
          Menu
        </ScrollLink>
        <ScrollLink
          to="app-download" // Match with the id of the section
          smooth={true}
          duration={500}
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => handleMenuClick("mobile-app")}
        >
          Mobile App
        </ScrollLink>
        <ScrollLink
          to="footer" // Match with the id of the section
          smooth={true}
          duration={500}
          className={menu === "contact us" ? "active" : ""}
          onClick={() => handleMenuClick("contact us")}
        >
          Contact Us
        </ScrollLink>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>} {/* Show dot only if cart has items */}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
