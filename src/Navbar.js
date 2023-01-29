import React from "react";
import logodark from "../src/assets/logo-dark.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={logodark} alt="logo" className="logo" />
      <button className="nav-btn">Get started</button>
    </nav>
  );
}
