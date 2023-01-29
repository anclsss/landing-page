import React from "react";
import heroDesktop from "../src/assets/image-hero-desktop.png";
import heroTablet from "../src/assets/image-hero-tablet.png";
import heroMobile from "../src/assets/image-hero-mobile.png";

export default function Hero() {
  return (
    <div className="heroSection">
      <div className="welcome">
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="welcome-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img src={heroDesktop} alt="hero" className="heroDesktop" />
        <img src={heroTablet} alt="hero" className="heroTablet" />
        <img src={heroMobile} alt="hero" className="heroMobile" />
      </div>
    </div>
  );
}
