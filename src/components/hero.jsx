import React, { Component } from "react";
import { coverText, cta } from "../content/hero_content2.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typical from "react-typical";
import Loader from "react-loader-spinner";
// import { bgvideos } from "../../content/bgvideos.jsx";
const body = document.querySelector("body");
gsap.registerPlugin(ScrollTrigger);
// import bgvideo from "./../../media/vid/barriques_h.mp4";

export default class Hero extends Component {
  constructor(props) {
    gsap.to(body, { overflow: "hidden" }, 0);
    super(props);
    this.state = {
      timeout: this.props.timeout ? this.props.timeout : 5000,
      videoIndex: 0,
      src: null,
      loaded: false,
      bgvideos: [],
      videoEl: null,
    };
    this.handleClickArrow = this.handleClickArrow.bind(this);
    this.loadVideos().then((bgvideos) => {
      this.setState({
        loaded: true,
        bgvideos,
        src: bgvideos[this.state.videoIndex],
      });
      gsap.to(body, { overflow: "auto" }, 0);
      this.initTriggers();
    });
  }
  async loadVideos() {
    const { bgvideos } = await import("../content/bgvideos.jsx");
    this.setState({ bgvideos });
    return bgvideos;
  }
  videoEnded(e) {
    const newIndex = (this.state.videoIndex + 1) % this.state.bgvideos.length;
    this.setState({ videoIndex: newIndex, src: this.state.bgvideos[newIndex] });
    e.target.load(); // Reloads data from new video
    e.target.play(); //
  }
  initTriggers() {
    this.setState({ videoEl: document.querySelector("#heroVideo") });
    ScrollTrigger.create({
      // Stops video when out of viewport
      trigger: "#hero",
      start: "0 0",
      end: "100% 0%",
      onEnterBack: () => {
        try {
          this.state.videoEl.play();
        } catch (e) {}
      },
      onLeave: () => {
        try {
          this.state.videoEl.pause();
        } catch (e) {}
      },
      // onLeaveBack
    });
  }
  handleClickArrow() {
    this.props.arrowTarget.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  render() {
    return this.state.loaded ? (
      <div
        ref={this.props.refprop}
        id="hero"
        className="flex content-center justify-center"
      >
        <video
          id="heroVideo"
          autoPlay={true}
          loop={false}
          muted={true}
          onEnded={(e) => this.videoEnded(e)}
        >
          <source src={this.state.src} />
        </video>
        <Typical
          className="b tc1 bgt br3 pa2 coverText pa3 mt4-m"
          steps={coverText}
          loop={Infinity}
          wrapper="div"
        />
        <div className="ctaContainer flex flex-column flex-row-ns">
          {cta.reduce((acc, val) => {
            acc.push(
              <a
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
                <span className="pr2 nowrap tc">{val.text}</span>
                <span className="w2"> {val.icon}</span>
              </a>
            );
            return acc;
          }, [])}
        </div>
      </div>
    ) : (
      <div id="hero" className="">
        <Loader
          type="TailSpin"
          color="#cccccc"
          className="loader"
          height={100}
          width={100}
        />
      </div>
    );
  }
}
