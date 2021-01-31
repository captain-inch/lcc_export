import React, { Component } from "react";
import { coverText } from "./hero_content.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import bgvideo from "./../../media/vid/barriques_timewarptestfinal.mov";
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
      .fromTo(
        "#arrow",
        { scale: 1, duration: 2 },
        { scale: 1.2, repeat: -1, duration: 2 }
      );
    gsap.from(".coverText", { x: "100vw" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: 0,
          end: "+=2000px",
          pin: true,
          scrub: true,
        },
      })
      .to("#arrow", { opacity: 0 })
      .fromTo("#coverText0", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText0", { scale: 1.1, duration: 5 })
      .to("#coverText0", { x: "-100vw", duration: 4, ease: "power2.in" })
      .fromTo("#coverText1", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText1", { scale: 1.1, duration: 5 })
      .to("#coverText1", { x: "-100vw", duration: 4, ease: "power2.in" })
      .fromTo("#coverText2", { opacity: 0 }, { opacity: 1, duration: 2, x: 0 })
      .to("#coverText2", { scale: 1.1, duration: 5 })
      .to("#coverText2", { x: "-100vw", duration: 4, ease: "power2.in" });
    // setInterval(this.coverTextInterval, this.state.timeout);
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
        <svg
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-arrow-bar-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
          />
        </svg>
      </div>
    );
  }
}
