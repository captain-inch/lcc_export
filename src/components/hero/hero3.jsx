import React, { Component } from "react";
import { coverText, cta, videoCta } from "../../content/hero_content.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typical from "react-typical";
import Video from "./video2.jsx";
import VideoLightbox from "./videoLightbox.jsx";
// import { LionPlayer } from "lion-player";
// import "lion-player/dist/lion-skin.min.css";

// import { bgvideos } from "../../content/bgvideos.jsx";
gsap.registerPlugin(ScrollTrigger);
// import bgvideo from "./../../media/vid/barriques_h.mp4";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVideoLoaded: false,
      srcs: [[]],
      videoLightbox: false,
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

  watchVideo(e) {
    this.setState({ videoLightbox: true });
    document.body.style.overflow = "hidden"; // prevents scroll
  }

  stopVideo(e) {
    this.setState({ videoLightbox: false });
    document.body.style.overflow = "visible"; // resumes scroll
  }

  async loadVideos() {
    // Propre way to use async with await and without .then
    const res = await import("../../content/videos_content.jsx");
    console.log("local video : ");
    console.log(res.localVideoTest);
    this.setState({ srcs: this.shuffle(res.bgvideos) });
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
        {this.state.videoLightbox ? (
          <VideoLightbox closeCallback={(e) => this.stopVideo(e)} />
        ) : null}
        <div className="hero_element">
          <Video
            srcs={this.state.srcs}
            videoLightbox={this.state.videoLightbox}
            callbackVideoPlaying={() => {
              this.setState(
                { firstVideoLoaded: true },
                this.props.callbackVideoPlaying()
              );
            }} // Triggers the loading of other components when first video is playing
          />
        </div>
        <div className={this.state.videoLightbox ? "o-0" : ""}>
          {this.state.firstVideoLoaded ? (
            <Typical
              className={"b tc1 bgt br3 pa2 coverText pa3 mt4-m textShadow "}
              steps={coverText}
              loop={Infinity}
              wrapper="div"
            />
          ) : null}
        </div>
        <div className="ctaContainer flex flex-column items-center flex-row-ns pb4 pb1-ns">
          <div
            key={0}
            className="ctaItem flex items-center pointer w-100 ma3 mb5-l mb4-m f4-l f5 grow br2 ba bw1 ph3 pv2 dib white bg-black-30 hover-bg-black-60 bgblur"
            onClick={(e) => this.watchVideo(e)}
          >
            <span className="pr2 nowrap tc center">{videoCta.text}</span>
            <span className="w2"> {videoCta.icon}</span>
          </div>
          <div
            key={1}
            className="ctaItem flex items-center pointer w-100 ma3 mb5-l mb4-m f4-l f5 grow br2 ba bw1 ph3 pv2 dib white bg-black-30 hover-bg-black-60 bgblur"
            onClick={(function (ref) {
              return function () {
                ref.scrollIntoView({
                  behavior: "smooth",
                });
              };
            })(this.props.ctaRefs.current)}
          >
            <span className="pr2 nowrap tc center">{cta.text}</span>
            <span className="w2"> {cta.icon}</span>
          </div>
        </div>
      </div>
    );
  }
}
