import React, { Component } from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Contact from "./Contact";
import TopButton from "./TopButton";
import Iconmedia from "./Iconmedia";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Gallery />
        <Menu />
        <Contact />
        <TopButton />
        <Iconmedia />
      </>
    );
  }
}

export default App;
