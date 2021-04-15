import React, { Component } from "react";
import { coverText } from "../../content/hero_content2.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bgvideos } from "../../content/bgvideos.jsx";
import bgvideo from "./../../media/vid/barriques_timewarptestfinal.mov";
import Typical from "react-typical";

gsap.registerPlugin(ScrollTrigger);
// import bgvideo from "./../../media/vid/barriques_h.mp4";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0,
      timeout: this.props.timeout ? this.props.timeout : 5000,
      videoIndex: 0,
      src: null,
    };
    this.handleClickArrow = this.handleClickArrow.bind(this);
  }
  videoEnded(e) {
    console.log("video ended, switching video");
    const newIndex = (this.state.videoIndex + 1) % bgvideos.length;
    this.setState({ videoIndex: newIndex, src: bgvideos[newIndex] }, () =>
      console.log(this.state)
    );
    e.target.load(); // Reloads data from new video
    e.target.play(); //
  }
  componentDidMount() {
    this.setState({ src: bgvideos[this.state.videoIndex] });
    gsap
      .timeline()
      .to("#arrow", {
        scale: 1,
        duration: 0.3,

        ease: "power1.out",
      })
      .to("#arrow", {
        fill: "white",
        scale: 0.8,
        duration: 0.6,
        opacity: 0.2,
        ease: "power1.in",
      })
      .yoyo(true)
      .repeat(-1);
    const videoEl = document.querySelector("#heroVideo");
    ScrollTrigger.create({
      // Stops video when out of viewport
      trigger: "#hero",
      start: "0 0",
      end: "100% 0%",
      onEnterBack: () => {
        videoEl.play();
        console.log("Entering back ...");
      },
      onLeave: () => {
        videoEl.pause();
        console.log("Leaving ...");
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
    return (
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
        <div
          className="arrowContainer pointer"
          onClick={() => this.handleClickArrow()}
        >
          <svg
            id="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="arrow bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
            <path
              fillRule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    );
  }
}
