import React from "react";

function Hero({ img, pageTitle }) {
  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover"
  }
  return (
    <section className="h-screen" style={style}>
      <div>
        <h1>{pageTitle}</h1>
      </div>
    </section>
  );
}

export default Hero;
