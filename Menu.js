import React, { Component } from "react";
import Menupub from "./img/menupub.png";
import Menulogo from "./img/logo.png";

class Menu extends Component {
  state = {
    stylePizza: "pizzaMenu",
    stylePasta: "disFood",
    styleSeafood: "disFood",
    styleDessert: "disFood"
  };

  changePizza = () => {
    if (this.state.stylePizza === "disFood") {
      this.setState({
        stylePizza: "pizzaMenu"
      });
      if (this.state.stylePasta === "pastaMenu") {
        this.setState({
          stylePasta: "disFood"
        });
      }
      if (this.state.styleSeafood === "seafoodMenu") {
        this.setState({
          styleSeafood: "disFood"
        });
      }
      if (this.state.styleDessert === "dessertMenu") {
        this.setState({
          styleDessert: "disFood"
        });
      }
    }
  };

  changePasta = () => {
    if (this.state.stylePasta === "disFood") {
      this.setState({
        stylePasta: "pastaMenu"
      });
      if (this.state.stylePizza === "pizzaMenu") {
        this.setState({
          stylePizza: "disFood"
        });
      }
      if (this.state.styleSeafood === "seafoodMenu") {
        this.setState({
          styleSeafood: "disFood"
        });
      }
      if (this.state.styleDessert === "dessertMenu") {
        this.setState({
          styleDessert: "disFood"
        });
      }
    }
  };

  changeSeafood = () => {
    if (this.state.styleSeafood === "disFood") {
      this.setState({
        styleSeafood: "seafoodMenu"
      });
      if (this.state.stylePizza === "pizzaMenu") {
        this.setState({
          stylePizza: "disFood"
        });
      }
      if (this.state.stylePasta === "pastaMenu") {
        this.setState({
          stylePasta: "disFood"
        });
      }
      if (this.state.styleDessert === "dessertMenu") {
        this.setState({
          styleDessert: "disFood"
        });
      }
    }
  };

  changeDessert = () => {
    if (this.state.styleDessert === "disFood") {
      this.setState({
        styleDessert: "dessertMenu"
      });
      if (this.state.stylePizza === "pizzaMenu") {
        this.setState({
          stylePizza: "disFood"
        });
      }
      if (this.state.stylePasta === "pastaMenu") {
        this.setState({
          stylePasta: "disFood"
        });
      }
      if (this.state.styleSeafood === "seafoodMenu") {
        this.setState({
          styleSeafood: "disFood"
        });
      }
    }
  };

  render() {
    return (
      <>
        <section id="menu" className="menu">
          <div className="menuNav">
            <img src={Menupub} className="menuPub" alt="Menupub" />
            <div className="square" />

            <div className="gridMenu">
              <a className="pizza" onClick={this.changePizza}>
                Pizza
              </a>
              <a className="pasta" onClick={this.changePasta}>
                Makarony
              </a>
              <a className="seaFood" onClick={this.changeSeafood}>
                Owoce Morza
              </a>
              <a className="dessert" onClick={this.changeDessert}>
                Desery
              </a>
            </div>
          </div>

          {/* Pizza */}

          <div className={this.state.stylePizza}>
            <div className="pizzaMarg">
              <h3>Margherita</h3>
              <h3 className="value">17 zł</h3>
              <p>pecorina, mozzarella, bazylia</p>
            </div>
            <div className="pizzaKala">
              <h3>Kalabryjska</h3>
              <h3 className="value">25 zł</h3>
              <p>pecorino, mozzarella, spianata, czosnek</p>
            </div>
            <div className="pizzaPipita">
              <h3>Pipita</h3>
              <h3 className="value">27 zł</h3>
              <p>
                mascarpone, pecorina, mozzarella, prosciutto cotto, chili,
                kukurydza
              </p>
            </div>
            <div className="pizzaOrtolana">
              <h3>Ortolana</h3>
              <h3 className="value">19 zł</h3>
              <p>czosnek, karczochy, suszone pomidory</p>
            </div>
            <div className="pizzaCrudo">
              <h3>Crudo</h3>
              <h3 className="value">25 zł</h3>
              <p>pecorina, mozzarella, szynka parmeńska, bazylia</p>
            </div>
            <div className="pizzaRomana">
              <h3>Romana</h3>
              <h3 className="value">25 zł</h3>
              <p>pecorino, mozzarella, oliwki, anchois, kapary</p>
            </div>
          </div>

          {/* Pasta */}

          <div className={this.state.stylePasta}>
            <div className="pastaPuttanesca">
              <h3>Spaghetti puttanesca</h3>
              <h3 className="value">20 zł</h3>
              <p>spaghetti, sos pomidorowy, czosnek, oliwki, kapary, chili</p>
            </div>
            <div className="pastaPenne">
              <h3>Penne po diabelsku</h3>
              <h3 className="value">24 zł</h3>
              <p>makaron rurki, chili, mascarpone, pancetta, guanciale</p>
            </div>
            <div className="pastaLosos">
              <h3>Penne z łososiem i wódką</h3>
              <h3 className="value">24 zł</h3>
              <p>
                makaron rurki, wódka, śmietana, łosoś wędzony, cebula, chili,
                czosnek
              </p>
            </div>
            <div className="pastaCacio">
              <h3>Cacio e pepe</h3>
              <h3 className="value">24 zł</h3>
              <p>spaghetti, pecorino romano, grana padano, oliva ev, pieprz</p>
            </div>
            <div className="pastaCarbonara">
              <h3>Carbonara</h3>
              <h3 className="value">24 zł</h3>
              <p>
                spaghetti, jaja, pancetta, guanciale, pecorino romana, pieprz
              </p>
            </div>
            <div className="pastaTagiatelle">
              <h3>Tagiatelle z ragu bolońskim</h3>
              <h3 className="value">28 zł</h3>
              <p>
                jajeczne tagiatelle, mięsne ragu bolońskie według oryginalnego
                przepisu
              </p>
            </div>
          </div>

          {/* Seafood */}

          <div className={this.state.styleSeafood}>
            <div className="seafoodFritto">
              <h3>Fritto misto</h3>
              <h3 className="value">35 zł</h3>
              <p>
                owoce morza smażone na głębokim tłuszczu (kalmary, krewetki,
                sardynki)
              </p>
            </div>
            <div className="seafoodSalad">
              <h3>Sałatka krewetkowa</h3>
              <h3 className="value">32 zł</h3>
              <p>
                sałata rzymska, rukola, pomidorki, parmezan, krewetki, grzanki
              </p>
            </div>
            <div className="seafoodItalian">
              <h3>Włoskie krewetki</h3>
              <h3 className="value">32 zł</h3>
              <p>Makaron rurki, krewetki, białe wino, masło, pomidorki</p>
            </div>
            <div className="seafoodFish">
              <h3>Fish & Chips</h3>
              <h3 className="value">26 zł</h3>
              <p>miruna (180g) w panierce piwnej, frytki, sos tatarski</p>
            </div>
          </div>

          {/* Dessert */}

          <div className={this.state.styleDessert}>
            <div className="dessertTiramisu">
              <h3>Tiramisu</h3>
              <h3 className="value">12 zł</h3>
              <p>
                biszkopt, kawa, migdałowy likier amaretto, mascarpone, kakao,
                gorzka czekalada
              </p>
            </div>
            <div className="dessertAngioletti">
              <h3>Angioletti fritti</h3>
              <h3 className="value">16 zł</h3>
              <p>smażone ciasto z pizzy na słodko, nutella</p>
            </div>
            <div className="dessertDay">
              <h3>Ciasto dnia</h3>
              <h3 className="value">? zł</h3>
              <p>Proszę zapytać kelnera</p>
            </div>
          </div>

          {/* Mobile menu */}

          <a className="menuWord" href="https://bit.ly/2uiAviR">
            Menu
            <img className="menuLogo" src={Menulogo} alt="Logo" />
          </a>
          <div className="flag">
            <span className="flGreen" />
            <span className="flWhite" />
            <span className="flRed" />
          </div>
        </section>
      </>
    );
  }
}

export default Menu;
