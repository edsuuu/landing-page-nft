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
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
    <div id="btn-container">
        <Button className={"btn"} text="Login"/>
        <Button className={"btn"} text="Registre"/>
    </div>
  </nav>
);

export default Navbar;
