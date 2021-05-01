import React, { Component, lazy, Suspense } from "react";
import Gallery from "react-photo-gallery";
import { gsap } from "gsap";
import { gallerySettings } from "../../content/gallery_content.jsx";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const body = document.querySelector("body");

export default class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySettings: gallerySettings,
      lightboxSrcs: [],
      lightboxActive: false,
      lightboxKey: 0,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(e) {
    try {
      let srcs = [];
      for (let i of document.querySelectorAll(
        ".react-photo-gallery--gallery img"
      )) {
        srcs.push(i.src);
      }
      const key = srcs.findIndex((x) => x === e.target.src);
      this.setState({
        lightboxSrcs: srcs,
        lightboxActive: true,
        lightboxKey: key,
      });
    } catch (e) {
      console.warn("Error opening image lightbox...", e);
    }
  }
  closeLightbox(e) {
    this.setState({ lightboxActive: false });
  }
  render() {
    return (
      <div id="reactGallery" className="mr4-l ml4-l pa2 b2 center">
        <div
          style={{ backdropFilter: "blur(5px)" }}
          className="lightboxBg dn z-2 fixed top-0 left-0 w-100 vh-100 bg-black-60 pointer"
          //onClick={() => this.closeLightbox()}
        >
          {this.state.lightboxActive ? (
            <Lightbox
              mainSrc={this.state.lightboxSrcs[this.state.lightboxKey]}
              nextSrc={
                this.state.lightboxSrcs[
                  (this.state.lightboxKey + 1) % this.state.lightboxSrcs.length
                ]
              }
              prevSrc={
                this.state.lightboxSrcs[
                  (this.state.lightboxKey +
                    this.state.lightboxSrcs.length -
                    1) %
                    this.state.lightboxSrcs.length
                ]
              }
              onCloseRequest={() => this.setState({ lightboxActive: false })}
              onMovePrevRequest={() =>
                this.setState({
                  lightboxKey:
                    (this.state.lightboxKey +
                      this.state.lightboxSrcs.length -
                      1) %
                    this.state.lightboxSrcs.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  lightboxKey:
                    (this.state.lightboxKey + 1) %
                    this.state.lightboxSrcs.length,
                })
              }
            />
          ) : null}
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
