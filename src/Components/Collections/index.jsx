import React, { Component } from "react";
import Ancient from "./img/ancient.png";
import Godofwar from "./img/godofwar.png";
import Lostinspace from "./img/lostinspace.png";
import Watchers from "./img/watchers.png";
import { Button } from "../Buttons/buttons";
import "./collections.scss";


export class Collection extends Component {
  render() {
    return (
      <>
        <div className="container-collection">
          <div className="col-img">
          <div id="bg-circle"></div>
            <img src={Ancient} alt="Ancient" />
            <img src={Godofwar} alt="Godofwar" />
            <img src={Lostinspace} alt="Lostinspace" />
            <img src={Watchers} alt="Watchers" />
          </div>

          <div className="collection-right">
            <div id="col-title">
              <div id="col-circle"></div>
              <div>
                <h1>Última coleção NFT</h1>
              </div>
            </div>
            <div id="col-paragraph">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus.
              </p>
            </div>
            <div id="col-btn">
              <Button className="btncol" text="Ver todos Coletores"/>
            </div>
          </div>

        </div>
      </>
    );
  }
}
