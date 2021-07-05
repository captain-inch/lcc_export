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
      videoEl: null,
      videoLoaded: false,
      srcs: [],
      thumbnails: [],
      videoindex: 0,
      thumbnailindex: 0,
      sources: [],
    };
  }
  async loadVideos() {
    await import("../../content/bgvideos.jsx").then((res) => {
      let sources = [];
      for (let src of res.bgvideos) {
        sources.push({ src, type: "video/mp4" });
      }
      console.log(sources);
      this.setState(
        { sources, srcs: res.bgvideos, thumbnails: res.thumbnails },
        () => console.log(this.state)
      );
    });
  }
  componentDidMount() {
    const videoEl = document.querySelector("#heroVideo");
    this.setState({ videoEl, index: 1 });
    this.loadVideos();
  }
  videoEnded(e) {
    const nextIndex = (this.state.videoindex + 1) % this.state.srcs.length;
    console.log(
      "Video ended // Index : " +
        this.state.videoindex +
        " // Srcs length : " +
        this.state.srcs.length +
        " // Next index : " +
        nextIndex
    );
    this.setState({ videoindex: nextIndex, videoLoaded: false });
    //this.state.videoEl.load();
  }
  canPlay(e) {
    console.log("Video can play");
    const nextIndex = (this.state.videoindex + 1) % this.state.srcs.length;
    console.log("Next thumbnail index : " + nextIndex);
    this.setState({ videoLoaded: true, thumbnailindex: nextIndex });
  }
  render() {
    return (
      <div
        ref={this.props.refprop}
        id="hero"
        className="flex content-center justify-center"
      >
        <div className="hero_element">
          <Video
            id="hero_video"
            videoindex={this.state.videoindex}
            thumnnailindex={this.state.thumbnailindex}
            srcs={this.state.srcs}
            thumbnails={this.state.thumbnails}
            videoLoaded={this.state.videoLoaded}
            callbackEnded={(e) => this.videoEnded(e)}
            callbackCanPlay={(e) => this.canPlay(e)}
          />
          <ThumbnailSpinner
            id="hero_thumbnail"
            thumbnailindex={this.state.thumbnailindex}
            thumbnails={this.state.thumbnails}
            videoLoaded={this.state.videoLoaded}
          />
        </div>
        {/* <LionPlayer sources={this.state.sources} autoplay="muted" /> */}
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
