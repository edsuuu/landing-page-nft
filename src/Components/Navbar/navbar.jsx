import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./img/logo.svg";
import { Button } from "../Button/button";
import { Link } from "react-scroll";
import "./navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLinkClick = () => {
    setClick(false)
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" onClick={handleLogoClick}/>
      <ul>
        <li>
          <Link to="MainContent" smooth={true} duration={500} id="link" onClick={handleLinkClick}>
            {"Criadores"}
          </Link>
        </li>
        <li>
          <Link to="Collection" smooth={true} duration={600} id="link" onClick={handleClick}>
            {"Coleção"}
          </Link>
        </li>
        <li>
          <Link to="ArticleOne" smooth={true} duration={900} id="link" onClick={handleClick}>
            {"Sobre"}
          </Link>
        </li>
        <li>
          <Link to="Contato" smooth={true} duration={1000} id="link" onClick={handleClick}>
            {"Contato"}
          </Link>
        </li>
      </ul>
      <div id="btn-container">
        <Button id={"btn"} text="Login" />
        <Button id={"btn"} text="Register" />
      </div>
      <button className="handle" onClick={handleClick}>
        <span className={click ? "active" : ""}>
          {click ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
        </span>
      </button>
      {click && (
        <div className="mobile-nav">
          <ul className="mobile-ul">
            <li className="mobile-li">
              <Link to="MainContent" smooth={true} duration={200} id="link" onClick={handleClick}>
                {"Criadores"}
              </Link>
            </li>
            <li className="mobile-li">
              <Link to="Collection" smooth={true} duration={200} id="link" onClick={handleClick}>
                {"Coleção"}
              </Link>
            </li>
            <li className="mobile-li">
              <Link to="ArticleOne" smooth={true} duration={200} id="link" onClick={handleClick}>
                {"Sobre"}
              </Link>
            </li>
            <li className="mobile-li">
              <Link to="Contato" smooth={true} duration={200} id="link" onClick={handleClick}>
                {"Contato"}
              </Link>
            </li>
          </ul>

          <div id="mobile-btn-container">
            <Button id={"btn"} text="Login" />
            <Button id={"btn"} text="Register" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;