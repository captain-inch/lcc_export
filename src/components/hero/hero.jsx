import React, { Component } from "react";
import { coverText } from "./hero_content.jsx";
import { gsap } from "gsap";
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
  coverTextInterval = () => {
    // console.log("interval");
    const onComplete = () => {
      const newIndex = (this.state.textIndex + 1) % coverText.length;
      this.setState({ textIndex: newIndex });
      gsap.to("#coverText", { opacity: 1, duration: 1 });
    };
    gsap.to("#coverText", {
      opacity: 0,
      duration: 0.5,
      onComplete: onComplete,
    });
  };
  componentDidMount() {
    gsap.fromTo(
      "#coverText",
      { opacity: 0, translateY: 20 },
      { translateY: 0, opacity: 1, duration: 1 }
    );
    setInterval(this.coverTextInterval, this.state.timeout);
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
        <div id="coverText" className="b f1 f1-ns tc1 bgt br3 pa2">
          {coverText[this.state.textIndex]}
        </div>
      </div>
    );
  }
}
