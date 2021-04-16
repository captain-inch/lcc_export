import React, { Component } from "react";
import {
  teamHeader,
  teamDetail,
  storyContent,
} from "./../content/story_content.jsx";
export default class Story extends Component {
  render() {
    return (
      <div id="story">
        <h1 className="sectionTitle">Story</h1>
        <h3 className="sectionSubtitle">{teamHeader.title}</h3>
        <div className="flex flex-column justify-center mt3 mb4">
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
              <div
                key={acc.length}
                className="teamItem flex flex-column w5 ma2"
              >
                <h4 className="mt3 mb3">{val.name}</h4>
                <img className="shadow-3 grow" src={val.img} alt={val.name} />
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
