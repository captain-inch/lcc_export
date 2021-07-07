import React, { Component } from "react";
import ReactPlayer from "react-player";
import { fullvideoURL } from "../../content/videos_content";
// Render a YouTube video player

export default class VideoLightbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ backdropFilter: "blur(5px)" }}
        className="lightboxBg flex flex-column justify-center items-center db z-2 fixed pt5 top-0 left-0 w-100 vh-100 bg-black-60 "
        onClick={(e) => this.props.closeCallback(e)}
      >
        <ReactPlayer light={false} url={fullvideoURL} />
        <div>
          <div
            key={1}
            className="ctaItem flex items-center pointer w-100 ma3 mb5-l mb4-m f4-l f5 grow br2 ba bw1 ph3 pv2 dib white hover-bg-black-60 bgblur"
            onClick={(e) => this.props.closeCallback(e)}
          >
            <span className="pr2 nowrap tc center">Resume to website</span>
            <span className="w2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
