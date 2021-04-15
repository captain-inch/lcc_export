import React, { Component } from "react";
import Navbar from "./navbar/navbar.jsx";
// import Hero from "./hero/hero.jsx";
// import Hero from "./hero/heroScroll.jsx";
import Hero from "./hero/hero2.jsx";
import Story from "./story.jsx";
import Team from "./team.jsx";
import Wineyard from "./wineyard/wineyard.jsx";
import Wines from "./wines/wines.jsx";
import Contact from "./contact.jsx";
import Anchor from "./anchor";
import { links, logo } from "../content/navbar_content.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  initScrollTriggers() {
    const wines = [1, 2, 3, 4];
    const wineUpPercent = 10;
    const wineContainerSlideXPercent = 20;
    const routes = links.reduce((acc, link) => {
      acc.push(link.route);
      return acc;
    }, []);
    const triggerDown = (id) => {
      // Action on navbar when scrolling down on an Anchor
      this.setState({ route: id });
    };
    const triggerUp = (id) => {
      // Action on navbar when scrolling up on an Anchor
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
    // wines.map((wine) =>
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: "#wine" + wine,
    //         start: "top bottom",
    //         end: "70% 50%",
    //         scrub: true,
    //       },
    //     })
    //     .from("#wine" + wine, {
    //       opacity: 0,
    //       xPercent:
    //         wine % 2 === 1
    //           ? wineContainerSlideXPercent
    //           : -wineContainerSlideXPercent, // If wine number is even : left, otherwise right
    //       duration: 3,
    //       ease: "power1",
    //     })
    //     .from("#wine" + wine + " .winePicture", {
    //       opacity: 0,
    //       duration: 2,
    //       yPercent: wineUpPercent,
    //     })
    // );
  }
  componentDidMount() {
    this.initScrollTriggers();
    this.state.refs[0].current.scrollTo({ top: -100 }); // SCROLL
  }

  render() {
    return (
      <div className="App">
        <Navbar
          callback={this.routeChange}
          links={links}
          refs={this.state.refs}
          active={this.state.route}
          logo={logo}
        />
        <Anchor id="Anchor_home" refprop={this.state.refs[0]} />
        <Hero timeout={5000} id="home" arrowTarget={this.state.refs[1]} />
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
