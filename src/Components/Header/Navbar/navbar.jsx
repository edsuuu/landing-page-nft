import React from "react";
import './navbar.scss';
import logo from '../img/logo.svg'
import { Button } from "../../Buttons/buttons";

const Navbar = ({ links }) => (
  <nav className="navbar">
    <img src={logo} alt="logo" />
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </li>
      ))}
    </ul>
    <div id="btn-container">
        <Button id={"btn"} text="Login"/>
        <Button id={"btn"} text="Registre"/>
    </div>
  </nav>
);

export default Navbar;
