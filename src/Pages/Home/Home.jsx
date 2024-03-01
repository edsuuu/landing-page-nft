import React from "react";
import "../../sass/main.scss";
import { Element } from "react-scroll";

import Header from "../../Components/Header/header";
import MainContent from "../../Components/MainContent";
import Collection from "../../Components/Collections";
import ArticleOne from "../../Components/Articles/Article-ONE";
import ArticleTwo from "../../Components/Articles/Article-TWO";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/navbar";

function Home() {
  return (
    <>
      <Element name="Home">
        <Navbar />
      </Element>

      <Header />

      <Element name="MainContent">
        <MainContent />
      </Element>

      <Element name="Collection">
        <Collection />
      </Element>

      <Element name="ArticleOne">
        <ArticleOne />
      </Element>

      <ArticleTwo />
      
      <Footer />
    </>
  );
}
export default Home;
