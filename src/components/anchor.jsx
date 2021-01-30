import { Component } from "react";

export default class Anchor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div ref={this.props.refprop} className="anchor" id={this.props.id}></div>
    );
  }
}
