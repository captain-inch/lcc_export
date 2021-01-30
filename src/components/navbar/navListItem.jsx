import { Component } from "react";

class NavListItem extends Component {
  menuClick = (e) => {
    // console.log(this.props);
    try {
      this.props.refprop.current.scrollIntoView({ behavior: "smooth" }); // SCROLL
    } catch (err) {
      console.warn("Unable to scroll to, ref link is probably broken");
      // console.log(err);
    }
    this.props.callback(this.props.route);
  };

  render() {
    return (
      <li>
        <a
          route={this.props.route}
          refprop={this.props.refprop}
          onClick={(e) => this.menuClick(e)}
          className={
            this.props.className +
            (this.props.active === this.props.route
              ? " b pb1 bb bw2 b--white-50"
              : "")
          }
        >
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default NavListItem;
