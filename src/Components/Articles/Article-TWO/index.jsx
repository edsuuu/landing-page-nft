import React, { Component } from "react";
import { Button } from "../../Button/button";
import bolsa from "./img/bolsa.svg";
import carteira from "./img/carteira.svg";
import galeria from "./img/galeria.svg";
import triangulo from "./img/triangulo.svg";
import linha from "./img/linha.svg";
import "./article-two.scss";

export class ArticleTwo extends Component {
  render() {
    return (
      <>
        <div className="article-two">
          <div id="article-two-title">
            <div id="article-bg-clear"></div>
            <h1>Crie e venda seus NFTs</h1>
          </div>

          <div className="article-two-box">
            <div id="box">
              <img src={carteira} alt="carteira" />
              <h1>Configure sua carteira</h1>
              <p>
                Depois de configurar sua carteira preferida, conecte-a ao
                OpenSea clicando no ícone da carteira no canto superior direito.
                Saiba mais sobre as carteiras que apoiamos.
              </p>
            </div>
            <div id="box">
              <img src={bolsa} alt="bolsa" />
              <h1>Crie sua coleção</h1>
              <p>
                Clique em Minhas coleções e configure sua coleção. Adicione
                links sociais, uma descrição, imagens de perfil e banner e
                defina uma taxa de vendas secundária.
              </p>
            </div>
            <div id="box">
              <img src={galeria} alt="galeria" />
              <h1>Adicione seus NFTs</h1>
              <p>
                Carregue seu trabalho (imagem, vídeo, áudio ou arte 3D),
                adicione um título e uma descrição e personalize seus NFTs com
                propriedades, estatísticas e conteúdo desbloqueável.
              </p>
            </div>
            <div id="box">
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
          <div className="article-contato">
            <h1>Pronto para o próximo lançamento de NFT?</h1>
            <input type="text" name="" id="" />
            <Button text={"Enviar Email"} />
          </div>
        </div>
      </>
    );
  }
}
