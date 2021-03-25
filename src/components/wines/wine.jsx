import React, { Component } from "react";

export default class Wine extends Component {
  constructor(props) {
    super(props);
    const side = this.props.id % 2;
    this.state = { side };
  }
  componentDidMount() {
    // gsap.to("#wine" + this.props.id, { left: 200, duration: 0 });
  }
  render() {
    return (
      <div
        id={"wine" + this.props.id}
        className={this.state.side ? "wineRightContainer" : "wineLeftContainer"}
      >
        <svg
          className="wineBg"
          viewBox="0 0 1400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1400" height="300" fill="#EEEEEE" />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1400"
            height="300"
          >
            <rect width="1400" height="300" fill="#F4F4F4" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M326 189C136 183 -120.833 113.5 -225.5 79.5L33.5 401H1447.5C1520.67 330.333 1623.1 189 1447.5 189C1228 189 1082.5 79.5 918 79.5C753.5 79.5 563.5 196.5 326 189Z"
              fill="#DDDDDD"
            />
          </g>
        </svg>

        <img
          alt={this.props.content.headerText}
          src={this.props.content.img}
          className={
            "winePicture " +
            (this.state.side !== 0 ? "wineRightPicture" : "wineLeftPicture")
          }
        />
        <div
          className={
            "flex flex-column ml4 " +
            (this.state.side ? "wineRightContent" : "wineLeftContent")
          }
        >
          <div className="wineHeaderText f4 f3-m f2-l b black mb3-ns">
            {this.props.content.headerText}
          </div>
          <div className="f6 f5-m f4-l tj black pt2 pt3-l">
            {" "}
            {this.props.content.text}
          </div>
          <div className="f5 i f4-ns black mt3-ns mt2">
            {" "}
            {this.props.content.headerText}
          </div>
        </div>
      </div>
    );
  }
}
