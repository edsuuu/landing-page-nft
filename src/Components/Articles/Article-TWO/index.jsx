import React, { useEffect } from "react";
import { Button } from "../../Button/button";
import bolsa from "./img/bolsa.svg";
import carteira from "./img/carteira.svg";
import galeria from "./img/galeria.svg";
import triangulo from "./img/triangulo.svg";
import { Element } from "react-scroll";
import linha from "./img/linha.svg";
import ScrollReveal from "scrollreveal";

import "./article-two.scss";

function ArticleTwo() {
  useEffect(() => {
    const ArticleTwo = ScrollReveal();

    ArticleTwo.reveal("#article-two-title", {
      origin: "top",
      distance: "200px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });

    ArticleTwo.reveal("#box-left", {
      origin: "left",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
    ArticleTwo.reveal("#box-right", {
      origin: "right",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
    ArticleTwo.reveal("#contact-title", {
      origin: "top",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
    ArticleTwo.reveal("#contact-input", {
      origin: "left",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
    ArticleTwo.reveal(".contact-btn", {
      origin: "bottom",
      distance: "300px",
      duration: 1000,
      delay: 300,
      reset: true,
      interval: 200,
    });
  }, []);

  return (
    <>
      <div className="article-two">
        <div id="article-two-title">
          <div id="article-bg-clear"></div>
          <div id="article-bg-h1">
            <h1>Crie e venda seus NFTs</h1>
          </div>
        </div>

        <div className="article-two-box">
          <div className="box" id="box-left">
            <img src={carteira} alt="carteira" />
            <h1>Configure sua carteira</h1>
            <p>
              Depois de configurar sua carteira preferida, conecte-a ao OpenSea
              clicando no ícone da carteira no canto superior direito. Saiba
              mais sobre as carteiras que apoiamos.
            </p>
          </div>
          <div className="box" id="box-left">
            <img src={bolsa} alt="bolsa" />
            <h1>Crie sua coleção</h1>
            <p>
              Clique em Minhas coleções e configure sua coleção. Adicione links
              sociais, uma descrição, imagens de perfil e banner e defina uma
              taxa de vendas secundária.
            </p>
          </div>
          <div className="box" id="box-right">
            <img src={galeria} alt="galeria" />
            <h1>Adicione seus NFTs</h1>
            <p>
              Carregue seu trabalho (imagem, vídeo, áudio ou arte 3D), adicione
              um título e uma descrição e personalize seus NFTs com
              propriedades, estatísticas e conteúdo desbloqueável.
            </p>
          </div>
          <div className="box" id="box-right">
            <img src={triangulo} alt="triangulo" />
            <h1>Liste-os para venda</h1>
            <p>
              Escolha entre leilões, listagens de preço fixo e listagens de
              preços decrescentes. Você escolhe como deseja vender seus NFTs e
              nós ajudamos você a vendê-los!
            </p>
          </div>
        </div>
        <img src={linha} id="linha" alt="linha" />
        <Element name="Contato">
          <div className="article-contato">
            <h1 id="contact-title">Pronto para o próximo lançamento de NFT?</h1>
            <input
              type="text"
              name="text"
              placeholder="Digite seu E-mail"
              id="contact-input"
            />
            <Button className={"contact-btn"}text={"Enviar Email"}/>
          </div>
        </Element>
      </div>
    </>
  );
}
export default ArticleTwo;
