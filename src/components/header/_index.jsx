import React from "react";

import Topbar from "./Topbar";
import Nav from "./Nav";

function Header({ children }) {
  return (
    <header>
      <Topbar />
      <Nav />
      {children}
    </header>
  );
}

export default Header;
