import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { gallerySettings as settings } from "../../content/gallery_content.jsx";
import { gsap } from "gsap";

export default class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      current: null,
      src: null,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(e) {
    if (!this.state.active) {
      this.setState(
        { active: true, current: e.target, src: e.target.src },
        () => {
          gsap.to(".lightboxBg", {
            // background of lightbox
            opacity: 1,
            display: "block",
            duration: 0.25,
          });
          console.log(window.innerWidth, window.innerHeight);
          const maxX = 0.9;
          const maxY = 0.9;
          const scale = Math.min(
            (window.innerWidth / e.target.width) * maxX,
            (window.innerHeight / e.target.height) * maxY
          );
          console.log(scale);
          gsap
            .timeline()
            .to(e.target, {
              position: "fixed",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              duration: 0,
            })
            .to(e.target, {
              scale,
              zIndex: 100,
            });
          console.log(e.target);
        }
      );
    }
    if (this.state.active) {
      gsap.to(".lightboxBg", { opacity: 0, display: "none", duration: 0.5 });
      gsap
        .timeline()
        .to(e.target, {
          position: "relative",
          top: 0,
          left: 0,
          x: 0,
          y: 0,
          duration: 0,
        })
        .to(e.target, { scale: 1, zIndex: 0 });
      this.setState({ active: false });
    }
  }

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };
  render() {
    console.log(settings);
    return (
      <div>
        <div
          className="lightboxBg dn z-1 bg-black-70 fixed w-100 vh-100"
          style={{ backdropFilter: "blur(5px)" }}
        ></div>
        <Gallery
          photos={settings}
          direction="row"
          targetRowHeight={this.props.targetRowHeight}
          onClick={this.openLightbox}
        />
      </div>
    );
  }
}
