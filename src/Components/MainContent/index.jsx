import React, { Component } from "react";
import Map from "./img/map.png";
import "./maincontent.scss";
import { Button } from "../Buttons/buttons";

export class MainContent extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="main-title">
            <div id="circle"></div>
            <div>
              <h1>Top Criadores</h1>
            </div>
          </div>
          <div className="mapa">
            <img src={Map} alt="Mapa" />
          </div>
          <div>
            <Button>Ver Todos Coletores</Button>
          </div>
        </div>
      </>
    );
  }
}
