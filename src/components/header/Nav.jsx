import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center mx-auto h-fit pb-3 px-5 max-w-7xl">
      {/* get smaller version of logo */}
      <div className="w-36 top-5">
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo_vertical.png`}
            alt="logo"
            id="logo"
          />
        </a>
      </div>

      <div className="">
        <a href="/about" className="mr-5 text-lg">
          About
        </a>
        <a href="/services" className="mr-5 text-lg">
          Services
        </a>
        <a href="/resources" className="mr-5 text-lg">
          Resources
        </a>
        <a href="/get-involved" className="text-lg">
          Get Involved
        </a>
      </div>
    </nav>
  );
}

export default Nav;
