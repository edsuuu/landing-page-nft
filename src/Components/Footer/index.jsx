import React from "react";
import logoG from "./img/logo.svg";
import "./footer-link";
import "./footer.scss";
import FooterLink from "./footer-link";

function Footer ()   {
  
    const Marketplace = [
      { name: "Explorar", url: "#" },
      { name: "NFT", url: "#" },
      { name: "Colecionáveis", url: "#" },
      { name: "Realidade virtual", url: "#" },
    ];
    const Recursos = [
      { name: "Centro de ajuda", url: "#" },
      { name: "Parceiros", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Boletim de Notícias", url: "#" },
    ];
    const Empresa = [
      { name: "Sobre nós", url: "#" },
      { name: "Carreiras", url: "#" },
      { name: "Apoiar", url: "#" },
      { name: "Boletim de Notícias", url: "#" },
    ];

    return (
      <>
        <div className="footer">
          <div className="footer-left">
            <img src={logoG} alt="" />
            <h3>Mercado NFT incrível, autêntico e único criação digital.</h3>
            <div id="icon-links">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="footer-right">
            <div id="footer-col-one">
              <h1>Marketplace</h1>
              <FooterLink links={Marketplace} id="ft-link" />
            </div>
            <div id="footer-col-two">
              <h1>Recursos</h1>
              <FooterLink links={Recursos} id="ft-link" />
            </div>
            <div id="footer-col-tree">
              <h1>Empresa</h1>
              <FooterLink links={Empresa} id="ft-link" />
            </div>
          </div>
        </div>

        <div className="footer-terms">
          <div className="copy">
            <h3>Copyright 2022 safira, todos os direitos reservados.</h3>
          </div>

          <div className="ft-left">
            <div id="ft-text-left">
              <h3>Política de Privacidade</h3>
            </div>

            <div id="ft-text-right">
              <h3>Termos & Condições</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
export default Footer;
