import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navlinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md my-5 align-items-center">
        <a className="navbar-brand" href="#home">
          Pandu
        </a>
        <button className="navbar-toggler" type="button" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navlinks.map(({ id, link }) => (
              <li key={id} className="nav-item">
                <a className="nav-link" href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
