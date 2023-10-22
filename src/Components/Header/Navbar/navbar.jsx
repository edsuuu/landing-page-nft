import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../img/logo.svg";
import { Button } from "../../Button/button";
import "./navbar.scss";

const Nav = ({ links }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="mobile-nav">
      
      <ul className="mobile-ul">
        {links.map((link, index) => (
          <li className="mobile-li" key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div id="mobile-btn-container">
        <Button id={"btn"} text="Login" />
        <Button id={"btn"} text="Register" />
      </div> 
    </div>
  );

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div id="btn-container">
        <Button id={"btn"} text="Login" />
        <Button id={"btn"} text="Register" />
      </div>
      {click && content}
      <button className="handle" onClick={handleClick}>
        {click ? <FaTimes /> : <GiHamburgerMenu size={20} />}
      </button>
    </nav>
  );
};

export default Nav;
