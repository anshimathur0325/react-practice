import React from "react";
import image from "./images/download (1).gif";

export default function About({ scrollToMoreAbout }) {
  return (
    <section id="about">
      <div className="background-container">
        <div className="text-container">
          <h1>Hi, I'm Anshi.</h1>
          <p><i>Statistics and Computer Science Student at UIUC</i></p>
        </div>
        {/* GIF with onClick handler */}
        <div onClick={scrollToMoreAbout} className="clickable-gif">
          <img src={image} className="car" alt="Animated car GIF" />
        </div>
      </div>
    </section>
  );
}
