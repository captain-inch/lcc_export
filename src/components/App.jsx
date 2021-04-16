import React, { Component } from "react";
import Navbar from "./navbar/navbar.jsx";
// import Hero from "./hero/hero.jsx";
// import Hero from "./hero/heroScroll.jsx";
import Hero from "./hero.jsx";
import Story from "./story.jsx";
import Wineyard from "./wineyard/wineyard.jsx";
import Wines from "./wines/wines.jsx";
import Contact from "./contact.jsx";
import Anchor from "./anchor";
import { links, logo } from "../content/navbar_content.jsx";
import { initScrollTriggers } from "./animations.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < links.length; i++) {
      refs.push(React.createRef());
    }
    this.state = { route: "#home", refs };
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(r) {
    // if (r !== this.state?.route) {
    //   this.setState({ route: r });
    // }
  }

  componentDidMount() {
    initScrollTriggers(links, this);
    // this.state.refs[0].current.scrollTo(); // SCROLL
  }

  render() {
    return (
      <div id="App">
        <Navbar
          callback={this.routeChange}
          links={links}
          refs={this.state.refs}
          active={this.state.route}
          logo={logo}
        />
        <Anchor id="Anchor_home" refprop={this.state.refs[0]} />
        <Hero
          timeout={5000}
          id="home"
          ctaRefs={[this.state.refs[1], this.state.refs[4]]}
        />
        <Anchor id="Anchor_story" refprop={this.state.refs[1]} />
        <Story />
        <Anchor id="Anchor_wineyard" refprop={this.state.refs[2]} />
        <Wineyard />
        <Anchor id="Anchor_wines" refprop={this.state.refs[3]} />{" "}
        <Wines refprop={this.state.refs[3]} className="wines" />
        <Anchor id="Anchor_contact" refprop={this.state.refs[4]} />
        <Contact />
      </div>
    );
  }
}
