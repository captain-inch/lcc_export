import React, { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Video extends Component {
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
      <video
        id="hero_video"
        className={this.props.videoLoaded ? "z-2" : "z-0"}
        autoPlay={true}
        loop={false}
        muted={true}
        onEnded={(e) => this.props.callbackEnded(e)}
        onCanPlay={(e) => this.props.callbackCanPlay(e)}
      >
        <source
          src={this.props.srcs[this.props.videoindex]}
          poster={this.props.thumbnails[this.props.thumbnailindex]}
        />
      </video>
    );
  }
}
