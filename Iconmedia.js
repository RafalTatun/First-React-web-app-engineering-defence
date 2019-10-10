import React, { Component } from "react";
import Fb from "./img/fb.png";
import Insta from "./img/instagram.png";
import Yt from "./img/youtube.png";
import Mail from "./img/email.png";
import Twit from "./img/twitter.png";

class Iconmedia extends Component {
  render() {
    return (
      <>
        <div className="iconbox">
          <a href="http://www.facebook.com">
            <img src={Fb} alt="fb" />
          </a>
          <a href="http://www.instagram.com">
            <img src={Insta} alt="instagram" />
          </a>
          <a href="http://www.youtube.com">
            <img src={Yt} alt="youtube" />
          </a>
          <a href="mailto: lapizzerianatatun@gmail.com">
            <img src={Mail} alt="mail" />
          </a>
          <a href="http://www.twitter.com">
            <img src={Twit} alt="twitter" />
          </a>
        </div>
      </>
    );
  }
}

export default Iconmedia;
