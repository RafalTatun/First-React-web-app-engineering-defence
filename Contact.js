import React, { Component } from "react";
import BgContact from "./img/contactbg.png";
import MapaContact from "./img/Mapa.png";

class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact" className="contact">
          <img src={BgContact} className="contactBg" alt="Contact BG" />

          <div className="gridContact">
            <h1 className="contKont">kontakt</h1>
            <h2 className="meetUs">ODWIEDŹ NAS</h2>
            <h3 className="contInfo">
              ODDZIAŁ ŚRÓDMIEŚCIE
              <br /> ul. Pawła Włodkowica 13 <br />
              <a href="tel:71 322 73 82">tel. 71 322 73 82</a> <br />
              <a href="tel:669 631 187">tel. 669 631 187</a>
            </h3>
            <h3 className="contDay">
              piątek - sobota 11-24 <br />
              niedziela - czwartek 11-23
            </h3>
            <img className="contMap" src={MapaContact} alt="Mapa" />
          </div>

          <footer>
            <p className="copy">
              COPYRIGHT © 2019, La Pizzeriana. DESIGNED BY Rafal
            </p>
          </footer>
        </section>
      </>
    );
  }
}

export default Contact;
