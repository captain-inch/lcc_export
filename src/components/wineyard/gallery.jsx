import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { gsap } from "gsap";
import { gallerySettings } from "../../content/gallery_content.jsx";
const body = document.querySelector("body");

export default class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySettings: gallerySettings,
      active: false,
      pos: null,
      src: null,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(e) {
    const init_pos = e.target.getBoundingClientRect();
    if (!this.state.active) {
      this.setState({ active: true, src: e.target.src, pos: init_pos }, () => {
        gsap.to(body, { overflow: "hidden" }, 0);
        gsap.to(
          ".lightboxBg",
          {
            opacity: 1,
            display: "block",
            duration: 0.25,
          },
          0
        );
        gsap.fromTo(
          ".lightboxImg",
          {
            top: 0,
            left: 0,
            x: init_pos.left,
            y: init_pos.top,
            scale: 0,
          },
          {
            top: "50vh",
            left: "50vw",
            x: "-50%",
            y: "-50%",
            scale: 1,
            duration: 0.25,
          },
          0
        );
        // maxWidth: "90vw",
        //     maxHeight: "90vh",
        // maxWidth: init_pos.width,
        // maxHeight: init_pos.height,
        // const maxX = 0.9;
        // const maxY = 0.9;
        // const scale = Math.min(
        //   (window.innerWidth / e.target.width) * maxX,
        //   (window.innerHeight / e.target.height) * maxY
        // );
        // gsap
        //   .timeline()
        //   .to(e.target, {
        //     position: "fixed",
        //     top: "50%",
        //     left: "50%",
        //     x: "-50%",
        //     y: "-50%",
        //     duration: 0,
        //   })
        //   .to(e.target, {
        //     scale,
        //     zIndex: 100,
        //   });
        console.log(e.target);
      });
    }
  }
  closeLightbox() {
    gsap.to(".lightboxBg", { opacity: 0, display: "none", duration: 0.5 });
    gsap.fromTo(
      ".lightboxImg",

      {
        top: "50vh",
        left: "50vw",
        x: "-50%",
        y: "-50%",

        duration: 0.25,
      },
      {
        top: 0,
        left: 0,
        x: this.state.pos.left,
        y: this.state.pos.top,
      },
      0
    );
    this.setState({ active: false });
    gsap.to(body, { overflow: "auto" }, 0);
  }

  render() {
    return (
      <div className="mr4-l ml4-l pa2 b2 center">
        <div
          style={{ backdropFilter: "blur(5px)" }}
          className="lightboxBg dn z-2 fixed top-0 left-0 w-100 vh-100 bg-black-60 pointer"
          onClick={() => this.closeLightbox()}
        >
          <img
            className="lightboxImg"
            src={this.state.src}
            alt={this.state.src}
          />
        </div>
        <Gallery
          photos={this.state.gallerySettings}
          direction="row"
          targetRowHeight={250}
          onClick={this.openLightbox}
        />
      </div>
    );
  }
}
