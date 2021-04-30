import React, { Component, lazy, Suspense } from "react";
import Navbar from "./navbar/navbar.jsx";
// import Hero from "./hero/hero.jsx";
// import Hero from "./hero/heroScroll.jsx";
import Hero from "./hero/hero2.jsx";
import Loader from "react-loader-spinner";

import Anchor from "./anchor";
import { links, logo } from "../content/navbar_content.jsx";
import { initAnimationsAnchor } from "./animations2.js";
const Story = lazy(() => import("./story.jsx"));
const Wineyard = lazy(() => import("./wineyard/wineyard.jsx"));
const Wines = lazy(() => import("./wines/wines.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
export default class App extends Component {
  constructor(props) {
    super(props);
    let refs = [];
    for (let i = 0; i < links.length; i++) {
      refs.push(React.createRef());
    }
    this.state = { route: "#home", refs };
  }
  componentDidMount() {
    initAnimationsAnchor(links, this);
  }

  render() {
    return (
      <div id="App">
        <Navbar
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
        <Suspense
          fallback={
            <div
              className="h5 bg--yellow"
              style={{ display: "grid", placeContent: "center" }}
            >
              <h3>Loading ...</h3>
              <Loader
                type="TailSpin"
                color="#cccccc"
                className=""
                visible={this.state.loaded ? false : true}
                height={100}
                width={100}
              />
            </div>
          }
        >
          <Story />
        </Suspense>
        <Anchor id="Anchor_wineyard" refprop={this.state.refs[2]} />
        <Suspense
          fallback={
            <div
              className="h5 bg--yellow"
              style={{ display: "grid", placeContent: "center" }}
            >
              <h3>Loading ...</h3>
              <Loader
                type="TailSpin"
                color="#cccccc"
                className=""
                visible={this.state.loaded ? false : true}
                height={100}
                width={100}
              />
            </div>
          }
        >
          <Wineyard />
        </Suspense>
        <Anchor id="Anchor_wines" refprop={this.state.refs[3]} />{" "}
        <Suspense
          fallback={
            <div
              className="h5 bg--yellow"
              style={{ display: "grid", placeContent: "center" }}
            >
              <h3>Loading ...</h3>
              <Loader
                type="TailSpin"
                color="#cccccc"
                className=""
                visible={this.state.loaded ? false : true}
                height={100}
                width={100}
              />
            </div>
          }
        >
          <Wines refprop={this.state.refs[3]} className="wines" />
        </Suspense>
        <Anchor id="Anchor_contact" refprop={this.state.refs[4]} />
        <Suspense
          fallback={
            <div
              className="h5 bg--yellow"
              style={{ display: "grid", placeContent: "center" }}
            >
              <h3>Loading ...</h3>
              <Loader
                type="TailSpin"
                color="#cccccc"
                className=""
                visible={this.state.loaded ? false : true}
                height={100}
                width={100}
              />
            </div>
          }
        >
          <Contact />
        </Suspense>
      </div>
    );
  }
}
