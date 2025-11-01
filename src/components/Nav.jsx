import React, { useState } from "react";
import "./styles/Nav.css";
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="logo">KE</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li></li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
