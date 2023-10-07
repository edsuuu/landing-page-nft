import React, { Component } from "react";
import Map from "./img/mapa.svg";
import ReLeft from "./img/rectangle-left.svg";
import ReRight from "./img/rectangle-right.svg";

import "./maincontent.scss";
import { Button } from "../Buttons/buttons";

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
          <div id="ReLeft">
            <img src={ReLeft} alt="ReLeft" />
          </div>
          <div id="ReRight">
            <img src={ReRight} alt="ReRight" />
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
