import { useState } from "react";

import React from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Dialog from "./components/dialog.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
      <Dialog />
    </>
  );
}

export default App;
