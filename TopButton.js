import React, { Component } from "react";

class TopButton extends Component {
  render() {
    return (
      <>
        <a href="#header">
          <button href="#header" className="myBtn">
            <i className="fas fa-angle-double-up" />
          </button>
        </a>
      </>
    );
  }
}

export default TopButton;
