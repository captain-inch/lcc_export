import React, { Component } from "react";
import MyGallery from "./gallery.jsx";
import { wineyard_Content } from "./../../content/wineyard_content.jsx";
import ReadMoreReact from "read-more-react";
import banner from "./../../media/img/misc/bgbanner.jpg";
const minimumLength = 100;
const idealLength = 150;
const maximumLength = 220;
export default class Wineyard extends Component {
  render() {
    return (
      <div id="wineyard" className="mt5">
        <div className="flex flex-column items-center">
          <h1
            className="tc dib dimBgOut z-5"
            id="wineyardtitle"
            style={{
              background: "#ffffffaa",
              backdropFilter: "blur(3px)",
              margin: 0,
            }}
          >
            Wineyard
          </h1>
          <div
            className="w-100"
            id="wineyardbanner"
            style={{
              marginTop: "-30px",
              height: "100px",
              background: "url(" + banner + ")",
              backgroundSize: "cover",
              backgroundRepeat: "repeat-x",
            }}
          ></div>
        </div>
        <h3 className="sectionSubtitle">Our core values</h3>
        <div className="flex flex-row flex-wrap justify-around">
          {wineyard_Content.reduce((acc, val) => {
            acc.push(
              <div
                key={acc.length}
                className="wineyardItem flex flex-column w5 ma2 items-center dimBg waveBg2"
              >
                <h4 className="mt3 mb3 h3 flex flex-column justify-center">
                  {val.headerText}
                </h4>
                <div className="w5 h5 overflow-hidden flex flex-column justify-center">
                  <img className="grow" src={val.img} alt={val.name} />
                </div>
                <div className="tj">
                  <ReadMoreReact
                    text={val.text}
                    min={minimumLength}
                    ideal={idealLength}
                    max={maximumLength}
                    readMoreText="[...] Read more"
                  />
                </div>
              </div>
            );
            return acc;
          }, [])}
        </div>
        <h3 className="sectionSubtitle">Gallery</h3>
        <div id="galleryWrapper">
          <MyGallery id="galleryReact" targetRowHeight={300} />
        </div>
      </div>
    );
  }
}
