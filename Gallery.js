import React, { Component } from "react";
import Gallery1 from "./img/Pastalove.png";
import Gallery2 from "./img/Frittomisto.png";
import Gallery3 from "./img/Pizza z salsiccią, stracchino i friarielli.png";
import Gallery4 from "./img/PizzaTyrolska.png";
import Gallery5 from "./img/Sernik.png";
import Gallery6 from "./img/Spaghettii alle vongole.png";
import Gallery7 from "./img/Tiramisu.png";
import Gallery8 from "./img/Cezar.png";
import Gallery9 from "./img/Pannacotta.png";

class Gallery extends Component {
  state = {
    gallery: "",
    gallery1: ["", "", "", "", "", "", "", ""]
  };

  resizeImage = () => {
    if (this.state.gallery === "") {
      this.setState({
        gallery: "bigSize"
      });
      for (let i = 0; i < this.state.gallery1.length; i++) {
        if (this.state.gallery1 === "") {
          this.setState({
            gallery1: "smallSize"
          });
        }
      }
    } else {
      if (this.state.gallery === "bigSize") {
        this.setState({
          gallery: ""
        });
        for (let i = 0; i < this.state.gallery1.length; i++) {
          if (this.state.gallery1 === "smallSize") {
            this.setState({
              gallery1: "none"
            });
          }
        }
      }
    }
  };

  render() {
    return (
      <>
        <section id="gallery" className="gallery">
          <figure className={this.state.gallery} onClick={this.resizeImage}>
            <img className="gallery-img" src={Gallery1} alt="Pastalove" />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery2} alt="Frittomisto" />
          </figure>
          <figure className={this.state.gallery1}>
            <img
              className="gallery-img"
              src={Gallery3}
              alt="Pizza z salsiccią, stracchino i friarielli"
            />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery4} alt="Sernik" />
          </figure>
          <figure className={this.state.gallery1}>
            <img
              className="gallery-img"
              src={Gallery5}
              alt="Spaghettii alle vongole"
            />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery6} alt="Tiramisu" />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery7} alt="Frittomisto" />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery8} alt="Cezar" />
          </figure>
          <figure className={this.state.gallery1}>
            <img className="gallery-img" src={Gallery9} alt="Frittomisto" />
          </figure>
        </section>
      </>
    );
  }
}

export default Gallery;
