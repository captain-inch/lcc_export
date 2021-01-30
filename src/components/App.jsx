import React, { Component } from "react";
import Navbar from "./navbar/navbar.jsx";
// import Hero from "./hero/hero.jsx";
import Hero from "./hero/heroScroll.jsx";
import Wines from "./wines/wines.jsx";
import Anchor from "./anchor";
import "tachyons";
import { links } from "./navbar/navbar_content.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { route: "#home" };
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(r) {
    // if (r !== this.state?.route) {
    //   this.setState({ route: r });
    // }
  }

  initScrollTriggers() {
    const wines = [1, 2, 3, 4];
    const wineUpPercent = 10;
    const wineContainerSlideXPercent = 20;
    let i = 0;
    const routes = links.reduce((acc, link) => {
      acc.push(link.route);
      return acc;
    }, []);
    const triggerDown = (id) => {
      this.setState({ route: id });
    };
    const triggerUp = (id) => {
      try {
        this.setState({ route: routes[routes.indexOf(id) - 1] });
      } catch {
        console.warn("Error on the sequence of nav items when moving upwards");
      }
    };
    routes.map((name) =>
      ScrollTrigger.create({
        trigger: "#Anchor_" + name,
        start: "50% 50%",
        end: "50% 50%",
        onEnter: (trigger) =>
          triggerDown(trigger.vars.trigger.split("#Anchor_")[1]), // Triggers when scrolling down (entering) a specific section
        onLeaveBack: (trigger) =>
          triggerUp(trigger.vars.trigger.split("#Anchor_")[1]), // // Triggers when scrolling up (leaving, going backwards from) a specific section
      })
    );
    wines.map((wine) =>
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#wine" + wine,
            start: "top bottom",
            end: "70% 50%",
            scrub: true,
          },
        })
        .from("#wine" + wine, {
          opacity: 0,
          xPercent:
            wine % 2 == 1
              ? wineContainerSlideXPercent
              : -wineContainerSlideXPercent, // If wine number is even : left, otherwise right
          duration: 3,
          ease: "power1",
        })
        .from("#wine" + wine + " .winePicture", {
          opacity: 0,
          duration: 2,
          yPercent: wineUpPercent,
        })
    );
  }
  componentDidMount() {
    this.initScrollTriggers();
  }

  render() {
    let refs = [];
    for (let i = 0; i < links.length; i++) {
      refs.push(React.createRef());
    }
    return (
      <div className="App">
        <Navbar
          callback={this.routeChange}
          links={links}
          refs={refs}
          active={this.state.route}
        />
        <Anchor id="Anchor_home" refprop={refs[0]} />
        <Hero timeout={5000} id="home" />
        <Anchor id="Anchor_wines" refprop={refs[1]} />
        <Wines refprop={refs[3]} className="wines" />
        <Anchor id="Anchor_story" refprop={refs[2]} />
        <div
          style={{ height: "120vh", backgroundColor: "pink" }}
          id="story"
          className="f2"
        ></div>
        <Anchor id="Anchor_team" refprop={refs[3]} />
        <div
          style={{ height: "80vh", backgroundColor: "green" }}
          id="team"
          className="f2"
        ></div>
        <Anchor id="Anchor_contact" refprop={refs[4]} />
        <div
          style={{ height: "50vh", backgroundColor: "lightblue" }}
          id="contact"
          className="f2"
        ></div>
      </div>
    );
  }
}
