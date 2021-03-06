import { Component } from "react";

class NavListItem extends Component {
  render() {
    return (
      <li>
        <span
          route={this.props.route}
          refprop={"#" + this.props.refprop}
          href={this.props.route}
          onClick={(e) =>
            this.props.callback(e, this.props.refprop.current, this.props.route)
          }
          style={{ transition: "all 0.3s" }}
          className={
            this.props.className +
            (this.props.active === this.props.route
              ? " b pb1 bb bw2 b--white-50"
              : "")
          }
        >
          {this.props.text}
        </span>
      </li>
    );
  }
}

export default NavListItem;
