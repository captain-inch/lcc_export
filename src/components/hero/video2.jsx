import React, { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import Loader from "react-loader-spinner";

// Render a YouTube video player
gsap.registerPlugin(ScrollTrigger);

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      active: 1,
      srcIndex1: 0,
      srcIndex2: 1,
      firstvideoLoaded: false,
    };
    this.onEnded = this.onEnded.bind(this);
    this.initTriggers();
  }

  initTriggers() {
    ScrollTrigger.create({
      // Stops video when out of viewport
      trigger: "#hero",
      start: "0 0",
      end: "100% 0%",
      onEnterBack: () => {
        try {
          console.log("Video is resumed");
          this.setState({ playing: true });
        } catch (e) {}
      },
      onLeave: () => {
        try {
          console.log("Video is stopped");

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
      // if difference is not 1, it means one index is at zero (due to module operator), so next Index is necessarily 1
      newIndex = 1;
    }

    return newIndex;
  }
  onEnded(e) {
    this.setState({ active: this.state.active === 1 ? 2 : 1 }, () => {
      if (this.state.active === 1) {
        this.setState({ srcIndex2: this.getNextIndex() });
      } else {
        this.setState({ srcIndex1: this.getNextIndex() });
      }
    });
  }
  render() {
    return (
      <div className="backgroundVideo" style={{ width: "100vw" }}>
        {this.state.firstvideoLoaded ? null : (
          <div className="flex justify-center items-center">
            <img
              src={this.props.srcs[this.state.srcIndex1][1]}
              id={"thumbnailPreview"}
            />
            <Loader
              type="TailSpin"
              color="#cccccc"
              className="absolute"
              visible={true}
              height={100}
              width={100}
            />
          </div>
        )}
        <div id="video1">
          <ReactPlayer
            playing={
              !this.props.videoLightbox &&
              this.state.playing &&
              this.state.active === 1
                ? true
                : false
            }
            onReady={() =>
              this.setState({ firstvideoLoaded: true }, () => {
                this.props.callbackVideoPlaying();
              })
            }
            muted={true}
            style={{
              display:
                this.state.firstvideoLoaded && this.state.active === 1
                  ? "block"
                  : "none",
            }}
            width="100%"
            height="100%"
            onEnded={this.onEnded}
            url={this.props.srcs[this.state.srcIndex1][0]}
            modestbranding={1}
          />
        </div>
        {this.state.firstvideoLoaded ? (
          <div id="video2">
            <ReactPlayer
              playing={
                !this.props.videoLightbox &&
                this.state.playing &&
                this.state.active === 2
                  ? true
                  : false
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
              url={this.props.srcs[this.state.srcIndex2][0]}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
