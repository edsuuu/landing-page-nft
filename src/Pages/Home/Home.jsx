import React, { Component } from "react";
import "../../sass/main.scss";
import { Header } from "../../Components/Header/header";
import { MainContent } from "../../Components/MainContent";

export class Home extends Component {
  render() {

    return (
      <>
        <Header />
        <MainContent />
      </>
    );
  }
}
