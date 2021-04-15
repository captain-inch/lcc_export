import React, { Component } from "react";
import { content } from "./../content/contact_content.jsx";
// import { storyContent } from "./../content/story_content.jsx";
export default class Team extends Component {
  render() {
    return (
      <div id="team">
        <h1>Infos & Contact</h1>
        <div className="flex flex-row flex-wrap justify-around mb4">
          {content.reduce((acc, val) => {
            acc.push(
              <div className="flex flex-column w5 ma2 items-center dimBg waveBg2">
                <h4 className="mt3 mb3 h3 flex flex-column justify-center">
                  {val.title}
                </h4>
                <div className="w5 h5 overflow-hidden flex flex-column justify-center items-center">
                  <img className="" src={val.logo} alt={val.title} />
                </div>
                <p className="tj">{val.text}</p>
                {val.button ? (
                  <a
                    class="flex items-center f5 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
                    href={val.button.href}
                  >
                    <span className="pr2">{val.button.text}</span>
                    {val.button.icon}
                  </a>
                ) : null}
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
}
