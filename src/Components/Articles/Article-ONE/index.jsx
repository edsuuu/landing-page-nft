import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "./article-one.scss";
import market from "./img/market.svg";
import money from "./img/money.svg";
import protection from "./img/protection.svg";
import secure from "./img/secure.svg";

function ArticleOne() {
  useEffect(() => {
    const Article = ScrollReveal();

    Article.reveal(".article-one-title", {
      origin: "top",
      distance: "200px",
      duration: 1000,
      delay: 300,
      reset: false,
      interval: 200,
    });

    Article.reveal("#article-paragraph", {
      origin: "left",
      distance: "400px",
      duration: 600,
      delay: 300,
      reset: false,
      interval: 200,
    });
    Article.reveal(".square", {
      origin: "top",
      distance: "200px",
      duration: 1000,
      delay: 300,
      reset: false,
      interval: 200,
    });
  }, []);

  return (
    <div className="article-one">
      <div className="article-bg-one">
        <div className="article-one-title">
          <div id="circle-bg"></div>
          <h1>Porque escolher-nos?</h1>
        </div>

        <div id="article-paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
            lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
            pulvinar.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem.
          </p>
        </div>
      </div>

      <div className="article-bg-two">
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
  );
}
export default ArticleOne;
