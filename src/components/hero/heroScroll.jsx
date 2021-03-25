import React, { Component } from "react";
import { coverText } from "../../content/hero_content.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgvideo from "./../../media/vid/barriques_timewarptestfinal.mov";
gsap.registerPlugin(ScrollTrigger);
// import bgvideo from "./../../media/vid/barriques_h.mp4";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0,
      timeout: this.props.timeout ? this.props.timeout : 5000,
    };
  }

  componentDidMount() {
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
    gsap.from(".coverText", { x: "100vw" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          snap: {
            snapTo: [0, 0.25, 0.55, 0.85],
            duration: { min: 0.2, max: 1 },
            ease: "power1",
            delay: 0,
          },
          start: 0,
          end: "+=4000px",
          pin: true,
          scrub: true,
          progress: 0,
        },
      })
      .to(".arrowContainer", { opacity: 0, duration: 2 })
      .fromTo("#coverText0", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText0", { scale: 1.1, duration: 5 }) // Text displayed
      .to("#coverText0", { x: "-100vw", duration: 4, ease: "power2.in" })
      .fromTo("#coverText1", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText1", { scale: 1.1, duration: 5 })
      .to("#coverText1", { x: "-100vw", duration: 4, ease: "power2.in" })
      .fromTo("#coverText2", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText2", { scale: 1.1, duration: 5 })
      .to("#coverText2", { x: "-100vw", duration: 4, ease: "power2.in" });
  }
  render() {
    return (
      <div
        ref={this.props.refprop}
        id="hero"
        className="flex content-center justify-center"
      >
        <video autoPlay={true} loop={true} muted={true}>
          <source src={bgvideo} />
        </video>
        {coverText.reduce((acc, txt) => {
          acc.push(
            <div
              key={acc.length}
              id={"coverText" + acc.length}
              className="b tc1 bgt br3 pa2 coverText"
            >
              {txt}
            </div>
          );
          return acc;
        }, [])}
        <div className="arrowContainer">
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

            {/* <svg
            id="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="arrow bi bi-arrow-bar-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
            />
          </svg>
          <div className="arrow" id="arrowDiv" /> */}
          </svg>
        </div>
      </div>
    );
  }
}
