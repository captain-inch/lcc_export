import React, { Component } from "react";
import { storyContent } from "./../content/story_content.jsx";
export default class Story extends Component {
  render() {
    return (
      <div id="story">
        <h1>Story</h1>
        <p className="center tj pa2 pa3-ns mw7 w-100">
          {storyContent.reduce((acc, val) => {
            acc.push(
              val.highlight ? (
                <span className="emphathize">{val.text}</span>
              ) : (
                val.text
              )
            );
            return acc;
          }, [])}
        </p>
      </div>
    );
  }
}
