import React, { useState } from "react";
import { RiMenuLine, RiCloseLine, RiAccountCircleLine } from "react-icons/ri";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { BiSearchAlt } from "react-icons/bi";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div>
      <button onClick={toggleNavbar} className="menu-icon">
        {isNavbarOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      <nav className={`navbar ${isNavbarOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" onClick={closeNavbar}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeNavbar}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeNavbar}>
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/cart" onClick={closeNavbar}>
              <BiSearchAlt size={32} />
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/cart" onClick={closeNavbar}>
              <PiShoppingCartDuotone size={32} />
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/login" onClick={closeNavbar}>
              <RiAccountCircleLine size={32} />
            </Link>
          </li>
        </ul>
        {/* <div className="logo">Your Logo</div> */}
      </nav>
    </div>
  );
};

export default Navbar;
