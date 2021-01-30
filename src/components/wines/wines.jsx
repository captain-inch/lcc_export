import React, { Component } from "react";
import Wine from "./wine.jsx";
import { winesList } from "./wines_content.jsx";
import { gsap } from "gsap";

export default class Wines extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="wines">
        <Wine id={1} content={winesList[0]} />
        <Wine id={2} content={winesList[1]} />
        <Wine id={3} content={winesList[2]} />
        <Wine id={4} content={winesList[3]} />
      </div>
    );
  }
}
