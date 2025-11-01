import { useState } from "react";

import React from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Tech from "./components/Technical.skills.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
