import React, { Component } from "react";
import { storyContent } from "./../content/story_content.jsx";

import {
  teamHeader,
  teamDetail,
  afterTrio,
  oenologists,
  family,
} from "../content/team_content.jsx";

import { initAnimationsStory } from "./animations.js";
import ReadMoreReact from "read-more-react";

const minimumLength = 130;
const idealLength = 160;
const maximumLength = 220;

export default class Story extends Component {
  componentDidMount() {
    initAnimationsStory();
  }
  render() {
    return (
      <div id="story">
        <h1 className="sectionTitle z-999">Story</h1>
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
        <h3 className="sectionSubtitle">{storyContent.title}</h3>
        <p id="storyText" className="center tj pa2 pa3-ns mw7 w-100">
          {storyContent.body.reduce((acc, val) => {
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
        </p>
        {/* PRESENTATION TRIO + FRED */}
        <div className="flex flex-row flex-wrap justify-around">
          {teamDetail.reduce((acc, val) => {
            acc.push(
              <div
                key={acc.length}
                className="teamItem flex flex-column w5 ma2"
              >
                <h4 className="mt3 mb3">{val.name}</h4>
                <img className="shadow-3 grow" src={val.img} alt={val.name} />
                <div className="tj mt3">
                  <ReadMoreReact
                    text={val.text}
                    min={minimumLength}
                    ideal={idealLength}
                    max={maximumLength}
                    readMoreText="Read more"
                  />
                </div>
              </div>
            );
            return acc;
          }, [])}
          <div className="center tj pa2 pa3-ns mw7 w-100">{afterTrio}</div>
        </div>
        {/* oenologists*/}

        <div id="oenologists">
          <h3>{oenologists.title}</h3>
          <p className="mw7 tj center pa2">{oenologists.text}</p>
          <div className="flex flex-row flex-wrap justify-around">
            {oenologists.members.reduce((acc, val) => {
              acc.push(
                <div
                  key={acc.length}
                  className="teamItem flex flex-column w5 ma2"
                >
                  <h4 className="mt3 mb3">{val.name}</h4>
                  <img
                    className="shadow-3 w4 center grow"
                    style={{ filter: "grayscale(100%)" }}
                    src={val.src}
                    alt={val.name}
                  />
                  <div className="tj mt3">
                    <ReadMoreReact
                      text={val.text}
                      min={minimumLength}
                      ideal={idealLength}
                      max={maximumLength}
                      readMoreText="Read more"
                    />
                  </div>
                </div>
              );
              return acc;
            }, [])}
          </div>{" "}
        </div>
        {/* Family*/}

        <div id="family">
          <h3 className="mb2 mw7 center">{family.title}</h3>
          <p className="mw7 tj center pa2">{family.text}</p>
          <div className="flex items-center">
            <img
              className="shadow-3 grow mw6 center"
              src={family.src}
              alt={family.title}
            />
          </div>
        </div>
      </div>
    );
  }
}
