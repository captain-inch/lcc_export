import React, { Component } from "react";
import { coverText, cta } from "../../content/hero_content.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typical from "react-typical";
import Video from "./video2.jsx";
import ThumbnailSpinner from "./thumbnailSpinner.jsx";
// import { LionPlayer } from "lion-player";
// import "lion-player/dist/lion-skin.min.css";

// import { bgvideos } from "../../content/bgvideos.jsx";
gsap.registerPlugin(ScrollTrigger);
// import bgvideo from "./../../media/vid/barriques_h.mp4";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcs: [],
    };
  }
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  async loadVideos() {
    // Propre way to use async with await and without .then
    const res = await import("./../../content/bgvideos.jsx");
    this.setState({ srcs: this.shuffle(res.bgvideos) }, () =>
      console.log(this.state)
    );
  }
  componentDidMount() {
    this.loadVideos();
  }
  render() {
    return (
      <div
        ref={this.props.refprop}
        id="hero"
        className="flex content-center justify-center"
      >
        <div className="hero_element">
          <Video srcs={this.state.srcs} />
        </div>
        <Typical
          className="b tc1 bgt br3 pa2 coverText pa3 mt4-m textShadow"
          steps={coverText}
          loop={Infinity}
          wrapper="div"
        />
        <div className="ctaContainer flex flex-column flex-row-ns">
          {cta.reduce((acc, val) => {
            acc.push(
              <div
                key={acc.length}
                className="ctaItem flex items-center pointer w-100 ma3 mb5-l mb4-m f4-l f5 grow br2 ba bw1 ph3 pv2 dib white bg-black-30 hover-bg-black-60 bgblur"
                onClick={(function (ref) {
                  return function () {
                    ref.scrollIntoView({
                      behavior: "smooth",
                    });
                  };
                })(this.props.ctaRefs[acc.length].current)}
              >
                <span className="pr2 nowrap tc center">{val.text}</span>
                <span className="w2"> {val.icon}</span>
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
}
