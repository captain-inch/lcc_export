import React, { Component } from "react";
import MyGallery from "./gallery.jsx";
import { wineyard_Content } from "./../../content/wineyard_content.jsx";
const emphathizeClassname = "b tcem";

export default class Wineyard extends Component {
  render() {
    return (
      <div id="wineyard">
        <h1>Wineyard</h1>
        <h3>Our core values</h3>
        <div className="flex h8 flex-column flex-wrap justify-around">
          {wineyard_Content.reduce((acc, val) => {
            acc.push(
              <div className="flex flex-column w5 ma2 items-center">
                <h4 className="mt3 mb3 h3 flex flex-column justify-center">
                  {val.headerText}
                </h4>
                <div className="w5 h5 overflow-hidden flex flex-column justify-center">
                  <img className="" src={val.img} alt={val.name} />
                </div>
                <p className="tj">
                  {val.text.reduce((acc, text) => {
                    acc.push(
                      text.highlight ? (
                        <span className={emphathizeClassname}>{text.text}</span>
                      ) : (
                        text.text
                      )
                    );
                    return acc;
                  }, [])}
                </p>
              </div>
            );
            return acc;
          }, [])}
        </div>
        <h3>Gallery</h3>
        <MyGallery targetRowHeight={300} />
      </div>
    );
  }
}
