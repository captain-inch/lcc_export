import gsap from "gsap/gsap-core";
import React, { Component } from "react";
import {
  teamHeader,
  teamDetail,
  storyContent,
} from "./../content/story_content.jsx";
export default class Story extends Component {
  componentDidMount() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#trio",
          start: "50% 100%",
          end: "50% 20%",
          scrub: true,
        },
      })
      .from(
        "#trio",
        {
          scale: 1.2,
          opacity: 0.75,
          duration: 2,
          ease: "power3.out",
        },
        0
      );
  }
  render() {
    return (
      <div id="story">
        <h1>Story</h1>
        <h3>{teamHeader.title}</h3>
        <div className="flex flex-column justify-center">
          <img
            id="trio"
            className="shadow-3"
            style={{ margin: "auto auto" }}
            src={teamHeader.img}
            alt={teamHeader.title}
          />
        </div>
        <p className="center tj pa2 pa3-ns mw7 w-100">
          {storyContent.reduce((acc, val) => {
            acc.push(
              val.highlight ? (
                <span className="emphathize" key={acc.length}>
                  {val.text}
                </span>
              ) : (
                val.text
              )
            );
            return acc;
          }, [])}
        </p>{" "}
        <div className="flex flex-row flex-wrap justify-around">
          {teamDetail.reduce((acc, val) => {
            acc.push(
              <div key={acc.length} className="flex flex-column w5 ma2">
                <h4 className="mt3 mb3">{val.name}</h4>
                <img className="shadow-3" src={val.img} alt={val.name} />
                <p className="tj">{val.text}</p>
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
}
