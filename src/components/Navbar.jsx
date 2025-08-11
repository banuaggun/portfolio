import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import navbar from "../assets/data/navbar.js";

import logo2 from "../assets/logo/logo2.svg";
import logo3 from "../assets/logo/logo3.svg";

import "../assets/style/navbar.css";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = navbar.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar__logo">

        <img src={logo2} className="logo logo2" alt="Banu Ağgün UI/UX Designer and Frontend Developer Portfolio" />

        <img src={logo3} className="logo logo3" alt="Banu Ağgün UI/UX Designer and Frontend Developer Portfolio" />
      </div>

      {/* menu */}
      <ul className="navbar__list">
        <li>
          {navbar.map((nav, index) => (
            <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`navbar__item ${activeIndex === index && "active"}`}
            >
              {nav.text}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/banuaggun/?locale=en_US"
            rel="noreferrer noopener"
            target="_blank"
            className="navbar__item social"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.behance.net/banuaggun"
            rel="noreferrer noopener"
            target="_blank"
            className="navbar__item social"
          >
            <i className="fa fa-behance"></i>
          </a>
          <a
            href="https://dribbble.com/banuaggun"
            rel="noreferrer noopener"
            target="_blank"
            className="navbar__item social"
          >
            <i className="fa fa-dribbble"></i>
          </a>
          <a
            href="https://github.com/banuaggun"
            rel="noreferrer noopener"
            target="_blank"
            className="navbar__item social"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
      {/* menu */}

      {/* mobile menu */}
      <div className="mobile__menu" onClick={handleClick}>
        {!nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#000"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}
      </div>
      <div className="navbar__mobile">
        <ul className={!nav ? "hidden" : "navbar__mobile__list"}>
          <li>
            {navbar.map((nav, index) => (
              <Link
                to={nav.link}
                key={`nav-${index}`}
                className={`navbar__mobile__list__item ${
                  activeIndex === index && "active"
                }`} onClick={() => setNav(false)}
              >
                {nav.text}
              </Link>
            ))}
            <div className="links">
                 <a
              href="https://www.linkedin.com/in/banuaggun/?locale=en_US"
              rel="noreferrer noopener"
              target="_blank"
              className="navbar__item" onClick={() => setNav(false)}
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.behance.net/banuaggun"
              rel="noreferrer noopener"
              target="_blank"
              className="navbar__item" onClick={() => setNav(false)}
            >
              <i className="fa fa-behance"></i>
            </a>
            <a
              href="https://dribbble.com/banuaggun"
              rel="noreferrer noopener"
              target="_blank"
              className="navbar__item" onClick={() => setNav(false)}
            >
              <i className="fa fa-dribbble"></i>
            </a>
            <a
              href="https://github.com/banuaggun"
              rel="noreferrer noopener"
              target="_blank"
              className="navbar__item" onClick={() => setNav(false)}
            >
              <i className="fa fa-github"></i>
            </a>
            </div>
          </li>
         
        </ul>
      </div>
      {/* mobile menu */}
    </div>
  );
};

export default Navbar;
