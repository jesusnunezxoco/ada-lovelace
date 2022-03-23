import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
function FooterNav() {
  return (
    <nav className="flex flex-col flex-grow gap-2  text-center lg:flex-row lg:justify-around">
      {data.footerNavLinks.map((col) => {
        return (
          <div className="flex flex-col">
            {col.map((link, i) => (
              <Link
                to={link.path}
                className={`text-lg mb-1 ${i === 0 ? "font-bold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        );
      })}
    </nav>
  );
}

export default FooterNav;
