import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
import Hand from "./img/image.png";
import Icon from "./img/icon.svg";

import "./header.scss";

export class Header extends Component {
  render() {
    const links = [
      { name: "Mercado", url: "#" },
      { name: "Sobre", url: "#" },
      { name: "Recursos", url: "#" },
      { name: "Contato", url: "#" },
    ];

    return (
      <>
        <header>
          <Navbar links={links} />

          <div class="elipse"></div>
          {/* <div class="elipse-2"></div> */}
          <div className="header-container">
            <div className="header-content-left">
              <div id="text-box-main">
                <h1>
                  Tenha Calma & <br />
                  Colete suas NFTs.
                </h1>
              </div>

              <div id="paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem.
                  Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas,
                  orci eu lobortis pulvinar.
                </p>
              </div>

              <div id="video-demo">
                <div id="icon">
                  <img src={Icon} alt="Icon" />
                </div>
                <div id="demo-content">
                  <div>
                    <h2>Vamos começar!</h2>
                  </div>
                  <p>
                    Assista a este rápido vídeo de demonstração
                    <br /> para ver como começar.
                  </p>
                </div>
              </div>
            </div>
            <div className="header-content-right">
              <img src={Hand} alt="Hand" />
            </div>
          </div>
        </header>
      </>
    );
  }
}
