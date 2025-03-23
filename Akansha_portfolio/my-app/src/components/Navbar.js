import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Adding the event listener inside useEffect to prevent multiple event listeners
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor); // Cleanup function
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> Akansha Singh | Student | Web Designer</h1>
      </Link>

      {/* Toggle navigation menu on mobile */}
      <ul className="list-none hidden sm:flex flex-row gap-10">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/Project" className="nav-link">Project</Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "white" }} /> : <FaBars size={20} style={{ color: "white" }} />}
      </div>

      {/* Mobile Menu (Only visible when hamburger is clicked) */}
      {/* <ul className={`mobile-menu ${click ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setClick(false)}>Home</Link>
          </li>
          <li>
            <Link to="/Project" className="nav-link" onClick={() => setClick(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link" onClick={() => setClick(false)}>About</Link>
          </li>
          <li >
            <Link to="/Contact" className="nav-link" onClick={() => setClick(false)}>Contact</Link>
          </li>
      </ul> */}

    </div>
  );
};

export default Navbar;
