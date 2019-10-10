import React, { Component } from "react";
import Nav from "./Nav";
import Info from "./Info";
import Logo from "./img/logo.png";
import BgHeader from "./img/herobg.png";

class Header extends Component {
  state = {
    style1: ""
  };

  burgerList = () => {
    if (this.state.style1 === "") {
      this.setState({
        style1: "shadow"
      });
    } else {
      this.setState({
        style1: ""
      });
    }
  };

  render() {
    return (
      <>
        <header id="header">
          <div className="row">
            <img className="bgHeader" src={BgHeader} alt="Tło" />
            <button className="burger" onClick={this.burgerList}>
              <i className="fas fa-bars" />
              <Nav />
            </button>
            <a className="logo" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <Info />
            <aside className={this.state.style1}>
              <Nav />
            </aside>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
