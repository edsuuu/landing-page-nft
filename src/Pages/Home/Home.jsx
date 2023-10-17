import React, { Component } from "react";
import "../../sass/main.scss";
import { Header } from "../../Components/Header/header";
import { MainContent } from "../../Components/MainContent";
import { Collection } from "../../Components/Collections";
import { ArticleOne } from "../../Components/Articles/Article-ONE";
import { ArticleTwo } from "../../Components/Articles/Article-TWO";
import { Footer } from "../../Components/Footer";

export class Home extends Component {
  render() {
    
    return (
      <>
        <Header />
        <MainContent />
        <Collection />
        <ArticleOne />
        <ArticleTwo />
        <Footer />
      </>
    );
  }
}
