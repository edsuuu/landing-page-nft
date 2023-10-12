import React, { Component } from "react";
import "./article-one.scss";
import market from "./img/market.svg";
import money from "./img/money.svg";
import protection from "./img/protection.svg";
import secure from "./img/secure.svg";

export class ArticleOne extends Component {
render() {
return (
    <>
    <div className="article-one">
        <div id="article-bg">
        <div id="circle-bg"></div>
        <h1>Porque escolher-nos?</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
            lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
            pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem.
        </p>
        </div>

        <div id="article-bg-two">
        <div className="square">
            <div id="circle-backgroud-square-yellow"></div>
            <img src={market} alt="market" />
            <h4>Mercado</h4>
        </div>
        <div className="square">
            <div id="circle-backgroud-square-larange"></div>
            <img src={money} alt="money-blue" />
            <h4>Dinheiro Protegido</h4>
        </div>
        <div className="square">
            <div id="circle-backgroud-square"></div>
            <img src={protection} alt="protection" />
            <h4>Proteção de dados</h4>
        </div>
        <div className="square">
            <div id="circle-backgroud-square-blue-marine"></div>
            <img src={secure} alt="secure" />
            <h4>Rapido & Seguro</h4>
        </div>
        </div>
    </div>
    </>
);
}
}
