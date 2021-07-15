import React, { Component } from "react";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = { side: this.props.id % 2 };
  }

  // author: "Georgina Hindle",
  //  authorCompany: "Decanter",
  //   wine: "Domaine Les Combes Cachées, Cuvée Axel, Minervois – La Livinière 2015",
  //   grade: "93/100",
  //   badge: "Top picks",
  render() {
    return (
      <div className="flex flex-column mw7 w-100 pa2 ml4 mr4 mb5 mb5-m mb2-l justify-center items-center dimBg waveBg2">
        <h4 className=" mt3 mb4 f4 h3 tc flex flex-column justify-center">
          {this.props.data.title}
        </h4>
        <div className="relative mt3 mw7 w-80 ">
          {/* Author */}
          <div className="testimonialAuthor pa2 flex flex-column items-center bg-white-60  pa2 br4 ">
            <div className="overflow-hidden flex flex-column justify-center items-center">
              <img
                src={this.props.data.img}
                alt={this.props.data.authorCompany}
              />
            </div>
            <div className="w4">
              <span className="tc i db f6">{this.props.data.author}</span>
              <span className="tc b db f6">
                {this.props.data.authorCompany}
              </span>
            </div>
          </div>
          {/* Badge text */}
          <div className="badgeText b tc3 mb5-l mb4-m f5-l f6 grow br2 ba bw1 ph3 pv2 dib  bg-white-30 hover-bg-white bgblur ">
            {this.props.data.badge}
          </div>{" "}
          {/* Main text */}
          <div className="flex testimonial">
            <p className="tj ">{this.props.data.text}</p>
          </div>
          {/* Badge Grade */}
          <div className="badgeGrade flex justify-end mr3 b black underline mb3 f4 dib">
            {this.props.data.grade}
          </div>
          {/* ======= */}
        </div>
      </div>
    );
  }
}
