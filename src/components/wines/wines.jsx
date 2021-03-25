import React, { Component } from "react";
import Wine from "./wine.jsx";
import { winesList, winesOverview } from "../../content/wines_content.jsx";
import gsap from "gsap/gsap-core";

export default class Wines extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAll: true, hover: null };
  }
  mouseOver(e) {
    this.setState({ activeAll: false, hoverId: e.target.parentNode.id });
  }
  mouseOut(e) {
    this.setState({ activeAll: true });
  }
  render() {
    return (
      <div id="wines">
        {/* ===== Wines overview ===== */}
        <div className="wineOverview flex flex-row-ns flex-column">
          {winesOverview.reduce((acc, val) => {
            acc.push(
              <div
                className={
                  "w-33-ns " +
                  (this.state.activeAll || this.state.hoverId == acc.length
                    ? "notdimmed"
                    : "dimmed")
                }
                id={acc.length}
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
              >
                <img
                  src={val.img}
                  className="objectFitContain grow"
                  alt={val.title}
                />
                <h2 className="pa1 tc">{val.title}</h2>
                <p className="pa1 tc i">{val.text}</p>
              </div>
            );
            return acc;
          }, [])}
        </div>
        {/* <div id="wineList">
          <Wine id={1} content={winesList[0]} />
          <Wine id={2} content={winesList[1]} />
          <Wine id={3} content={winesList[2]} />
          <Wine id={4} content={winesList[3]} />
        </div> */}
      </div>
    );
  }
}
