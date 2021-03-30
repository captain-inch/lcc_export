import React, { Component } from "react";

export default class Wine extends Component {
  constructor(props) {
    super(props);
    this.state = { side: this.props.id % 2 };
  }
  render() {
    return (
      <div id={"wine" + this.props.id} className="relative h5 w-100 ">
        <div
          className={
            "waveBg w-90-l w-100-m w-100 h-100 absolute " +
            (this.state.side ? "left-0-l right-1-m" : "right-0-l left-1-m")
          }
        >
          <img
            alt={this.props.content.headerText}
            src={this.props.content.img}
            className={
              "winePicture " +
              (this.state.side !== 0
                ? "right-0 mr2 mr0-ns"
                : "left-0 ml2 ml0-ns")
            }
          />
          <div
            className={
              "wineContent flex flex-column " +
              (this.state.side
                ? "mr6 pr1 pr0-ns left-0 tr ml4-ns ml2"
                : "ml6 pl1 pl0-ns right-0 tl mr4-ns mr2")
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
      </div>
    );
  }
}
