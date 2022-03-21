import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center mx-auto h-28 px-5 max-w-7xl">
      <a href="/">
        {/* get smaller version of logo */}
        <div className="w-40 absolute top-5">
          <img
            src={`${process.env.PUBLIC_URL}/logo_vertical.png`}
            alt="logo"
            id="logo"
          />
        </div>
      </a>
      <div>
        <a href="/about" className="mr-5">About</a>
        <a href="/services" className="mr-5">Services</a>
        <a href="/resources" className="mr-5">Resources</a>
        <a href="/get-involved" className="">Get Involved</a>
      </div>
    </nav>
  );
}

export default Nav;
