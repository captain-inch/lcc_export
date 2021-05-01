import React, { Component } from "react";
import Wine from "./wine.jsx";
import Anchor from "../anchor.jsx";
import {
  winesList,
  winesOverview,
  wineIcon,
} from "../../content/wines_content.jsx";
import { initAnimationsWines } from "../animations.js";
import ReadMoreReact from "read-more-react";

const minimumLength = 100;
const idealLength = 150;
const maximumLength = 220;

export default class Wines extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < 3; i++) {
      refs.push(React.createRef());
    }
    this.state = { activeAll: true, hover: null, refs };
  }

  componentDidMount() {
    initAnimationsWines();
  }

  checkZone(target) {
    for (let parent of document.querySelectorAll(".wineFamily")) {
      if (parent.contains(target)) {
        return parent.id;
      }
    }
  }

  mouseEnter(e) {
    const wineFamilyId = this.checkZone(e.target);
    this.setState({ activeAll: false, hoverId: wineFamilyId });
  }
  mouseLeave(e) {
    console.log("Leaving " + e.target);
    this.setState({ activeAll: true });
  }
  render() {
    return (
      <div id="wines">
        <h1 className="winesTitle sectionTitle">Our wines</h1>
        {/* ===== Wines overview ===== */}
        <div className="wineOverview center flex flex-row-ns flex-column justify-center-ns">
          {winesOverview.reduce((acc, val) => {
            acc.push(
              <div
                className={
                  "wineFamily w-30-ns " +
                  // eslint-disable-next-line eqeqeq
                  (this.state.activeAll || this.state.hoverId == acc.length
                    ? "notdimmed"
                    : "dimmed")
                }
                key={acc.length}
                id={acc.length}
                onMouseEnter={(e) => this.mouseEnter(e)}
                onMouseLeave={(e) => this.mouseLeave(e)}
              >
                <img
                  src={val.img}
                  className="objectFitContain grow"
                  alt={val.title}
                />
                <h2
                  className="pa1 no-underline pointer h3 mt0 mb5"
                  i={acc.length}
                >
                  {val.title}
                </h2>
                <a
                  key={acc.length}
                  className="ctaItem flex items-center w4 center pointer ma3 mb3 f5-l f6 i grow br2 ba bw1 ph3 pv2 dib black hover-white hover-bg-black-60 bgblur"
                  onClick={(function (i, refs) {
                    return function () {
                      console.log(i);
                      refs[i].current.scrollIntoView({
                        behavior: "smooth",
                      });
                    };
                  })(acc.length, this.state.refs)}
                >
                  <span className="pr2 nowrap tc center mr5">See wines</span>
                  <span className="w3 ">{wineIcon}</span>
                </a>
                <p className="pa1 mt0 tc i">
                  <ReadMoreReact
                    text={val.text}
                    min={minimumLength}
                    ideal={idealLength}
                    max={maximumLength}
                    readMoreText="Read more"
                  />
                  {val.txt}
                </p>
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
          <Wine id={3} content={winesList[3]} metaTitle={"Minervois Rouge"} />
          <Wine id={4} content={winesList[4]} />
          <Wine id={5} content={winesList[5]} />
        </div>
        <Anchor refprop={this.state.refs[2]} />
        <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
          Minervois Rouge
        </h2>
        <div id="wineList" className="mt5 mb5">
          <Wine id={6} content={winesList[6]} metaTitle={"Minervois Rouge"} />
          <Wine id={7} content={winesList[7]} />
          <Wine id={8} content={winesList[8]} />
        </div>
      </div>
    );
  }
}
