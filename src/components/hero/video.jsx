import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { thumbnails } from "../../content/bgvideos.jsx";

gsap.registerPlugin(ScrollTrigger);

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bgvideos: [],
      src: null,
      videoIndex: 0,
      videoEl: null,
      thumbnails,
    };
  }
  async loadVideos() {
    console.log("Loading videos");
    const { bgvideos } = await import("../../content/bgvideos.jsx");
    return bgvideos;
  }
  componentDidMount() {
    const videoEl = document.querySelector("#heroVideo");
    this.setState({ videoEl });
    this.loadVideos().then((bgvideos) =>
      this.setState({
        bgvideos,
        thumbnails,
        videosrc: bgvideos[this.state.videoIndex],
        thumbnailsrc: this.state.thumbnails[this.state.videoIndex],
      })
    );
    this.initTriggers();
  }

  async videoEnded(e) {
    const newIndex = (this.state.videoIndex + 1) % this.state.bgvideos.length;
    this.setState(
      {
        videoIndex: newIndex,
        videosrc: this.state.bgvideos[newIndex],
        thumbnailsrc: this.state.thumbnails[newIndex],
        loaded: false,
      },
      () => {
        e.target.load(); // Reloads data from new video
        e.target.play(); //
      }
    );
  }
  initTriggers() {
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
    return (
      <div id="hero" className="">
        <video
          id="heroVideo"
          className={this.state.loaded ? "db" : "dn"}
          autoPlay={true}
          loop={false}
          muted={true}
          onEnded={(e) => this.videoEnded(e)}
          onCanPlay={(e) => this.setState({ loaded: true })}
        >
          <source src={this.state.videosrc} />
        </video>
        <img
          src={this.state.thumbnailsrc}
          className={this.state.loaded ? "dn" : "db"}
          alt="Preview thumbnail"
          id="videoThumbnail"
        ></img>
        {this.state.loaded ? null : (
          <Loader
            type="TailSpin"
            color="#cccccc"
            className="loader"
            height={100}
            width={100}
          />
        )}
      </div>
    );
  }
}
