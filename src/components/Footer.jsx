import React from "react";
import { Link } from "react-router-dom";
function footer() {
  return (
    <footer className="bg-light-gray px-5 py-16">
      <div className="container mx-auto">
        {/* first row */}
        <div className="flex lg:flex-row mb-2">
          {/* logo */}
          <div className="mr-auto">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/logo_vertical.png`}
                alt="logo"
              />
            </Link>
          </div>
          <nav className="order-3 w-screen flex  lg:flex-row lg:justify-around" >
            <div className="flex flex-col">
              <Link to="/about" className="font-bold text-xl mb-3">
                About
              </Link>
              <Link to="/our-technology" className="text-xl mb-3">
                Our Technology
              </Link >
              <Link to="/our-mission" className="text-xl mb-3">
                Our Mission
              </Link >
              <Link  to="/our-team" className="text-xl mb-3">
                Our Team
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/about" className="font-bold text-xl mb-3">
                About
              </Link>
              <Link to="/our-technology" className="text-xl mb-3">
                Our Technology
              </Link >
              <Link to="/our-mission" className="text-xl mb-3">
                Our Mission
              </Link >
              <Link  to="/our-team" className="text-xl mb-3">
                Our Team
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/about" className="font-bold text-xl mb-3">
                About
              </Link>
              <Link to="/our-technology" className="text-xl mb-3">
                Our Technology
              </Link >
              <Link to="/our-mission" className="text-xl mb-3">
                Our Mission
              </Link >
              <Link  to="/our-team" className="text-xl mb-3">
                Our Team
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/about" className="font-bold text-xl mb-3">
                About
              </Link>
              <Link to="/our-technology" className="text-xl mb-3">
                Our Technology
              </Link >
              <Link to="/our-mission" className="text-xl mb-3">
                Our Mission
              </Link >
              <Link  to="/our-team" className="text-xl mb-3">
                Our Team
              </Link>
            </div>
          </nav>

          <div className="order-2 lg:order-3">
            <h3 className="text-dark-purple text-2xl mb-3">Contact Us</h3>
            <address>
              No-2034, 10th Cross, GF<br />
              Siddaveerappa Layout,
              <br />
              Davanagere-577004
              <br />
              Karnataka, INDIA
              <br />
              <a
                href="mailto:rakesh@adalovelace.in"
                className="text-dark-purple"
              >
                rakesh@adalovelace.in
              </a>
            </address>
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-3 items-end justify-items-center py">
          <div className="">
            <p>
              Website developed in partnerhship with Knowbility as part of AIR
              2021
            </p>
          </div>
          <div>
            <p>2021 &copy; Ada Lovelace. All Rights Reserved.</p>
          </div>
          <div>
            <form>
              <input
                type={"text"}
                id="search"
                className="border-2 border-dark-purple rounded-md mr-2 py-2 text-lg"
                placeholder="Search"
              ></input>{" "}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
