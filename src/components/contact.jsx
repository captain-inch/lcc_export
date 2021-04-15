import React, { Component } from "react";
import { content } from "./../content/contact_content.jsx";
// import { storyContent } from "./../content/story_content.jsx";
export default class Team extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Infos & Contact</h1>

        <div className="flex justify-center mb4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6794436.4272035565!2d0.7191798936964178!3d48.77375954950629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb14e25b3a5ea9c02!2sDomaine%20Les%20Combes%20Cach%C3%A9es!5e1!3m2!1sfr!2sfr!4v1618484617877!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="center flex flex-row flex-wrap justify-around mb4 mw8">
          {content.reduce((acc, val) => {
            acc.push(
              <div className="flex flex-column w5 ma2 items-center dimBg waveBg2">
                <h4 className="mt3 mb3 h3 flex flex-column justify-center">
                  {val.title}
                </h4>
                <div className="w5 h5 overflow-hidden flex flex-column justify-center items-center">
                  <img className="" src={val.logo} alt={val.title} />
                </div>
                <p className="tj">{val.text}</p>
                {val.button ? (
                  <a
                    class="flex items-center f5 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
                    href={val.button.href}
                  >
                    <span className="pr2">{val.button.text}</span>
                    {val.button.icon}
                  </a>
                ) : null}
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
}
