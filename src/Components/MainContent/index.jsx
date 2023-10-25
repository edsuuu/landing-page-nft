import React, { Component } from "react";
import Map from "./img/mapa.svg";

import "./maincontent.scss";
import { Button } from "../Button/button";
import { Card } from "./Card";

export class MainContent extends Component {
  render() {
    return (
      <main>
        <div className="main-title">
          <div id="circle"></div>
          <div>
            <h1>Top Criadores</h1>
          </div>
        </div>

        <div className="mapa">
          <div id="map-cards">
            <Card />  
          </div>

          <div id="world">
            <img src={Map} alt="" />
          </div>
        </div>

        <div className="button-container">
          <Button className="main-btn" text="Ver Todos Coletores"></Button>
        </div>
      </main>
    );
  }
}
