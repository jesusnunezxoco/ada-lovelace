import React from "react";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
function Topbar() {
  return (
    <div className="flex justify-end bg-slate-100 py-5 ">
      <div className="flex max-w-lg">
        <form>
          <input
            type={"text"}
            id="search"
            className="border-2 border-dark-purple rounded-md mr-2"
            placeholder="Search"
          ></input>{" "}
        </form>
        <a href="#" className="mr-3">
          Contact Us
        </a>
        <a href="#" className="mr-3">
          <img alt="Facebook logo" src={facebook}></img>
        </a>
        <a href="#" className="mr-3">
          <img alt="LinkedIn logo" src={linkedin}></img>
        </a>
        <a href="#" className="mr-3">
          <img alt="Twitter logo" src={twitter}></img>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
