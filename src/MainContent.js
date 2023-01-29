import React from "react";
import iconAnimation from "../src/assets/icon-animation.svg";
import iconDesign from "../src/assets/icon-design.svg";
import iconPhotography from "../src/assets/icon-photography.svg";
import iconCrypto from "../src/assets/icon-crypto.svg";
import iconBusiness from "../src/assets/icon-business.svg";

export default function MainContent() {
  return (
    <main>
      <div className="accent-div">
        <h2>Check out our most popular courses!</h2>
      </div>
      <div className="main-items">
        <img src={iconAnimation} alt="animation" />
        <h3>Animation</h3>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <h4>Get Started</h4>
      </div>
      <div className="main-items">
        <img src={iconDesign} alt="design" />
        <h3>Design</h3>
        <p>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </p>
        <h4>Get Started</h4>
      </div>
      <div className="main-items">
        <img src={iconPhotography} alt="photography" />
        <h3>Photography</h3>
        <p>
          Explore critical fundamentals like lighting, composition, and focus to
          capture exceptional photos.
        </p>
        <h4>Get Started</h4>
      </div>
      <div className="main-items">
        <img src={iconCrypto} alt="crypto" />
        <h3>Crypto</h3>
        <p>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
        <h4>Get Started</h4>
      </div>
      <div className="main-items">
        <img src={iconBusiness} alt="business" />
        <h3>Business</h3>
        <p>
          A step-by-step playbook to help you start, scale, and sustain your
          business without outside investment.
        </p>
        <h4>Get Started</h4>
      </div>
    </main>
  );
}
