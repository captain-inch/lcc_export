import { Component } from "react";
import { NavListItem, logo } from "./navListItem.jsx";

export default class Story extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ height: "120vh", backgroundColor: "pink" }}
        id="story"
        className="f2"
      >
        <h3>Our story</h3>
      </div>
    );
  }
}
