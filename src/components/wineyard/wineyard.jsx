import React, { Component } from "react";
import MyGallery from "./gallery.jsx";

export default class Wineyard extends Component {
  render() {
    return (
      <div id="wineyard">
        <h1>Wineyard</h1>

        <MyGallery targetRowHeight={300} />
      </div>
    );
  }
}
