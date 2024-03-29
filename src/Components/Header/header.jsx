import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Hand from "./img/image.png";
import Icon from "./img/icon.svg";
import "./header.scss";

function Header() {
  useEffect(() => {
    const Container = ScrollReveal();
   

    Container.reveal("#text-box-main", {
      origin: "top",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });

    Container.reveal("#paragraph", {
      origin: "left",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });

    Container.reveal(".hand", {
      origin: "right",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: false,
      interval: 200,
    });

    Container.reveal("#video-demo", {
      origin: "bottom",
      distance: "200px",
      duration: 1000,
      delay: 200,
      reset: false,
      interval: 200,
    });

    Container.reveal(".header-content-right ", {
      origin: "right",
      distance: "200px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
  }, []);

  return (
    <>
      <header>
        <div className="elipse"></div>
        <div className="elipse-2"></div>
        <div className="header-container">
          <div className="header-content-left">
            <div id="text-box-main">
              <h1>Tenha Calma & Colete suas NFTs.</h1>
            </div>

            <div id="paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris
                pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu
                lobortis pulvinar.
              </p>
            </div>
            <div className="hand">
              <img src={Hand} alt="hand" />
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
                  Assista a este rápido vídeo de demonstração <br /> para ver
                  como começar.
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

export default Header;
