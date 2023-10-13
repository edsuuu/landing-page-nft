import React, { Component } from "react";
import Profile from "./img/Profile-image.svg";
import "./card.scss";

export class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div id="profile">
            <img src={Profile} alt="Profile"  />
          </div>

          <div id="card-description">
            <h1>Wzard Dee</h1>
            <p>4.89 ETH</p>
          </div>
          <div id="card-line">|</div>
          <div id="card-description-one">
            <h1>33</h1>
            <p>Items</p>
          </div>
        </div>
      </>
    );
  }
}
