import React, { Component } from "react";
import Wine from "./wine.jsx";
import Anchor from "../anchor.jsx";
import {
  winesList,
  winesOverview,
  wineIcon,
  titles,
} from "../../content/wines_content.jsx";
import { initAnimationsWines } from "../animations.js";
import ReadMoreReact from "read-more-react";
import Testimonial from "./testimonial.jsx";
import {
  testimonials,
  reviewers,
  testimonialHeader,
} from "../../content/testimonials_content.jsx";

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
                  "wineFamily w-30-ns flex flex-column items-center justify-center" +
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
                  className="pa1 no-underline pointer h3-ns mt2 mb5-ns mb2"
                  i={acc.length}
                >
                  {val.title}
                </h2>
                <div
                  key={acc.length}
                  className="flex items-center w4 center pointer ma2 ma3-ns f5-l f6 i grow br2 ba bw1 ph3 pv2 dib black hover-white hover-bg-black-60 bgblur"
                  onClick={(function (i, refs) {
                    return function () {
                      console.log(i);
                      refs[i].current.scrollIntoView({
                        behavior: "smooth",
                      });
                    };
                  })(acc.length, this.state.refs)}
                >
                  <span className="pr2 nowrap tc ">See wines</span>
                  <span className="w3 ">{wineIcon}</span>
                </div>
                <div className="pa1 mt0 tc i mb5 mb2-ns pl3 pr3 tj">
                  <ReadMoreReact
                    text={val.text}
                    min={minimumLength}
                    ideal={idealLength}
                    max={maximumLength}
                    readMoreText="Read more"
                  />
                  {val.txt}
                </div>
              </div>
            );
            return acc;
          }, [])}
        </div>
        {/* ===== TESTIMONIALS ===== */}
        <div className="flex flex-column flex-row-l items-center justify-center">
          {testimonials.reduce((acc, val) => {
            acc.push(
              <Testimonial data={val} key={"testimonial_" + acc.length} />
            );
            return acc;
          }, [])}
        </div>
        <h3>{testimonialHeader}</h3>
        <div className="flex justify-center">
          <div className="mw6 mw7-m mw8-l flex flex-wrap flex-row-ns justify-center items-center ">
            {reviewers.reduce((acc, val) => {
              acc.push(
                <img className="mh2 mw4 pa2" src={val.img} alt={val.alt} />
              );
              return acc;
            }, [])}
          </div>
        </div>
        {/* ===== WINES DETAILS ===== */}
        <Anchor refprop={this.state.refs[1]} />
        <div>
          <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
            {titles[1]}
          </h2>
          <div id="wineList" className="mt5 mb5">
            <Wine id={0} content={winesList[0]} metaTitle={titles[1]} />
            <Wine id={1} content={winesList[1]} />
            <Wine id={2} content={winesList[2]} />{" "}
          </div>
          <Anchor refprop={this.state.refs[0]} />

          <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
            {titles[0]}
          </h2>
          <div id="wineList" className="mt5 mb5">
            <Wine id={3} content={winesList[3]} metaTitle={titles[0]} />
            <Wine id={4} content={winesList[4]} />
            <Wine id={5} content={winesList[5]} />
          </div>
          <Anchor refprop={this.state.refs[2]} />
          <h2 className="wineHeaderText mt5 pa5 tc cf1-ns b underline">
            {titles[2]}
          </h2>
          <div id="wineList" className="mt5 mb5">
            <Wine id={6} content={winesList[6]} metaTitle={titles[2]} />
            <Wine id={7} content={winesList[7]} />
          </div>
        </div>
      </div>
    );
  }
}
