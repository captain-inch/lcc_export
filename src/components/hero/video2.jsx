import React, { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";

// Render a YouTube video player
gsap.registerPlugin(ScrollTrigger);

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: true, active: 1, srcIndex1: 0, srcIndex2: 1 };
    this.onEnded = this.onEnded.bind(this);
  }

  initTriggers() {
    ScrollTrigger.create({
      // Stops video when out of viewport
      trigger: "#hero",
      start: "0 0",
      end: "100% 0%",
      onEnterBack: () => {
        try {
          this.setState({ playing: true });
        } catch (e) {}
      },
      onLeave: () => {
        try {
          this.setState({ playing: false });
        } catch (e) {}
      },
      // onLeaveBack
    });
  }
  getNextIndex() {
    let newIndex = 0;
    if (this.state.srcIndex1 - this.state.srcIndex2 === 1) {
      newIndex = (this.state.srcIndex1 + 1) % this.props.srcs.length; // latest video is video 1 ??
    } else if (this.state.srcIndex2 - this.state.srcIndex1 === 1) {
      newIndex = (this.state.srcIndex2 + 1) % this.props.srcs.length; // latest video is video 1 ??
    } else {
      console.log("Cas 3");
      // if difference is not 1, it means one index is at zero (due to module operator), so next Index is necessarily 1
      newIndex = 1;
    }
    console.log(
      this.state.srcIndex1,
      this.state.srcIndex2,
      newIndex,
      this.props.srcs.length
    );
    return newIndex;
  }
  onEnded(e) {
    this.setState({ active: this.state.active === 1 ? 2 : 1 }, () => {
      if (this.state.active === 1) {
        this.setState({ srcIndex2: this.getNextIndex() }, () =>
          console.log(this.state)
        );
      } else {
        this.setState({ srcIndex1: this.getNextIndex() }, () =>
          console.log(this.state)
        );
      }
    });
  }
  render() {
    return (
      <div className="backgroundVideo" style={{ width: "100vw" }}>
        <div id="video1">
          <ReactPlayer
            playing={
              this.state.playing && this.state.active === 1 ? true : false
            }
            muted={true}
            style={{ display: this.state.active === 1 ? "block" : "none" }}
            width="100%"
            height="100%"
            onEnded={this.onEnded}
            url={this.props.srcs[this.state.srcIndex1]}
            modestbranding={1}
          />
        </div>
        <div id="video2">
          <ReactPlayer
            playing={
              this.state.playing && this.state.active === 2 ? true : false
            }
            modestbranding={1}
            muted={true}
            width="100%"
            height="100%"
            style={{
              display: this.state.active === 2 ? "block" : "none",
              minWidth: "100vw",
              minHeight: "100vh",
            }}
            onEnded={this.onEnded}
            url={this.props.srcs[this.state.srcIndex2]}
          />
        </div>
      </div>
    );
  }
}
