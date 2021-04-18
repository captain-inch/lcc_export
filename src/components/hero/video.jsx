import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { thumbnail } from "../../content/bgvideos.jsx";

const body = document.querySelector("body");
gsap.registerPlugin(ScrollTrigger);

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, bgvideos: [], src: null, videoIndex: 0 };
  }
  async loadVideos() {
    console.log("Loading videos");
    const { bgvideos } = await import("../../content/bgvideos.jsx");
    this.setState({ bgvideos, loaded: true, src: bgvideos[0] });
    return bgvideos;
  }
  componentDidMount() {
    this.loadVideos();
    this.initTriggers();
  }

  async videoEnded(e) {
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

  render() {
    return this.state.loaded ? (
      <video
        id="heroVideo"
        autoPlay={true}
        loop={false}
        muted={true}
        onEnded={(e) => this.videoEnded(e)}
      >
        <source src={this.state.src} />
      </video>
    ) : (
      <div id="hero" className="">
        <img src={thumbnail} alt="Preview thumbnail" id="videoThumbnail"></img>
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
