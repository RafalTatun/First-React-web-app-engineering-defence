import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#header">Strona Główna</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
