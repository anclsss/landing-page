import React from "react";
import logoLight from "../src/assets/logo-light.svg";

export default function Footer() {
  return (
    <footer>
      <img src={logoLight} alt="logo" className="logoLight" />
      <button>Get Started</button>
    </footer>
  );
}
