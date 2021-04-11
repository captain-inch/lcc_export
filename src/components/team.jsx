import React, { Component } from "react";
import { teamHeader, teamDetail } from "./../content/team_content.jsx";
export default class Team extends Component {
  render() {
    return (
      <div id="team">
        <h1>Team</h1>
        <h3>{teamHeader.title}</h3>
        <img className="shadow-3" src={teamHeader.img} alt={teamHeader.title} />
        <p className="tc">{teamHeader.text}</p>
        <div className="flex flex-row flex-wrap justify-around">
          {teamDetail.reduce((acc, val) => {
            acc.push(
              <div className="flex flex-column w5 ma2">
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
