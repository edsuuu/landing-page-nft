import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Ancient from "./img/ancient.png";
import Godofwar from "./img/godofwar.png";
import Lostinspace from "./img/lostinspace.png";
import Watchers from "./img/watchers.png";
import { Button } from "../Button/button";
import "./collections.scss";

function Collection() {
  useEffect(() => {
    const Collection = ScrollReveal();


    Collection.reveal(".col-title", {
      origin: "left",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 0,
    });
    Collection.reveal("#col-paragraph", {
      origin: "right",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 0,
    });
    Collection.reveal("#col-btn", {
      origin: "left",
      distance: "400px",
      duration: 1000,
      delay: 400,
      reset: true,
      interval: 0,
    });


    Collection.reveal(".image", {
      origin: "left",
      distance: "600px",
      duration: 400,
      delay: 200,
      reset: true,
      interval: 300,
    });
    
  }, []);

  return (

      <div className="container-collection">
        <div id="bg-circle"></div> {/* background da colection img */}
        <div className="collection-img">
          <div className="image" id="Ancient">
            <img src={Ancient} alt="Ancient" />
          </div>
          <div className="image">
            <img src={Godofwar} alt="Godofwar" />
          </div>
          <div className="image">
            <img src={Lostinspace} alt="Lostinspace" />
          </div>
          <div className="image">
            <img src={Watchers} alt="Watchers" />
          </div>
        </div>
        <div className="collection-right">
          <div className="col-title">
            <div id="col-circle"></div>

            <h1>Última coleção NFT</h1>
          </div>
          <div id="col-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
              lacus eget vulputate rhoncus.
            </p>
          </div>
          <div id="col-btn">
            <Button text="Ver todos Coletores" />
          </div>
        </div>
      </div>

  );
}
export default Collection;
