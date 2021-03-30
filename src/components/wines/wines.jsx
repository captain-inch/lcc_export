import React, { Component } from "react";
import Wine from "./wine.jsx";
import Anchor from "../anchor.jsx";
import { winesList, winesOverview } from "../../content/wines_content.jsx";
import gsap from "gsap/gsap-core";

export default class Wines extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < 3; i++) {
      refs.push(React.createRef());
    }
    this.state = { activeAll: true, hover: null, refs };
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
        <h1 className="">Our wines</h1>
        {/* ===== Wines overview ===== */}
        <div className="wineOverview center flex flex-row-ns flex-column">
          {winesOverview.reduce((acc, val) => {
            acc.push(
              <div
                className={
                  "w-33-ns " +
                  (this.state.activeAll || this.state.hoverId == acc.length
                    ? "notdimmed"
                    : "dimmed")
                }
                key={acc.length}
                id={acc.length}
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
              >
                <img
                  src={val.img}
                  className="objectFitContain grow"
                  alt={val.title}
                />
                <h2
                  className="pa1 no-underline pointer"
                  i={acc.length}
                  onClick={(function (i, refs) {
                    return function () {
                      console.log(i);
                      refs[i].current.scrollIntoView({
                        behavior: "smooth",
                      });
                    };
                  })(acc.length, this.state.refs)}
                >
                  {val.title}
                </h2>
                <p className="pa1 tc i">{val.text}</p>
              </div>
            );
            return acc;
          }, [])}
        </div>
        <Anchor refprop={this.state.refs[0]} />
        <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">Whites</h2>
        <div id="wineList" className="mt5 mb5">
          <Wine id={0} content={winesList[0]} metaTitle={"Blancs"} />
          <Wine id={1} content={winesList[1]} />
          <Wine id={2} content={winesList[2]} />{" "}
        </div>
        <Anchor refprop={this.state.refs[1]} />

        <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
          Minervois La Livinière
        </h2>
        <div id="wineList" className="mt5 mb5">
          <Wine id={1} content={winesList[1]} metaTitle={"Minervois Rouge"} />
          <Wine id={2} content={winesList[2]} />
          <Wine id={3} content={winesList[3]} />
        </div>
        <Anchor refprop={this.state.refs[2]} />
        <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
          Minervois Rouge
        </h2>
        <div id="wineList" className="mt5 mb5">
          <Wine id={1} content={winesList[1]} metaTitle={"Minervois Rouge"} />
          <Wine id={2} content={winesList[2]} />
          <Wine id={3} content={winesList[3]} />
        </div>
      </div>
    );
  }
}
