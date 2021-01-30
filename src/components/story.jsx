import { Component } from "react";
import NavListItem from "./navListItem.jsx";
import logo from "./../../media/img/logo2.png";
import "./navbar.css";
import { links } from "./content.js";
const defaultActive = links[0].href;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div></div>;
  }
}
