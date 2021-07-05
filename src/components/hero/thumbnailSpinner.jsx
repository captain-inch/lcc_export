import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class ThumbnailSpinner extends Component {
  render() {
    return (
      <div id="hero_thumbnail" className="">
        <img
          id="hero_thumbnail"
          src={this.props.thumbnails[this.props.thumbnailinex]}
          className={this.props.videoLoaded ? "dn" : "db"}
          alt="Preview thumbnail"
        ></img>
        {this.props.videoLoaded ? null : (
          <Loader
            type="TailSpin"
            color="#cccccc"
            className="loader z-3"
            height={100}
            width={100}
          />
        )}
      </div>
    );
  }
}
