import React from "react";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";
function footer() {
  return (
    <footer className="bg-light-gray px-5 py-16">
      <div className="container mx-auto">
        {/* first row */}
        <div className="flex flex-col justify-center items-center  lg:flex-row mb-5">
          {/* logo */}
          <div className="w-40 mb-5">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/logo_vertical.png`}
                alt="logo"
              />
            </Link>
          </div>
         
            <FooterNav />
      
        

          <div className="order-2 text-center lg:text-left">
            <h3 className="text-dark-purple text-2xl mb-2">Contact Us</h3>
            <address className="">
              <div className="mb-2">
                No-2034, 10th Cross, GF
                <br />
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
              </div>
              <div className="flex justify-center lg:justify-start">
                <a href="#" className="mr-3">
                  <img alt="Facebook logo" src={facebook}></img>
                </a>
                <a href="#" className="mr-3">
                  <img alt="LinkedIn logo" src={linkedin}></img>
                </a>
                <a href="#" className="">
                  <img alt="Twitter logo" src={twitter}></img>
                </a>
              </div>
            </address>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-between md:flex-wrap">
          <div className="flex flex-col lg:w-1/6">
            <img src={`${process.env.PUBLIC_URL}/knowbility_logo.png`} alt="Knowbility logo" className="w-40"></img>
            <p className="text-sm">
              Website developed in partnerhship with Knowbility as part of AIR
              2021
            </p>
          </div>
          <div className="flex-grow text-center">
            <p>2021 &copy; Ada Lovelace. All Rights Reserved.</p>
          </div>
          <div className="lg:justify-self-end">
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
