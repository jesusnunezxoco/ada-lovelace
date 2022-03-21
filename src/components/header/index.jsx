import React from "react";

import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
  return (
    <header>
      <Topbar />
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
