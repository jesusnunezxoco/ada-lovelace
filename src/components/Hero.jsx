import React from "react";

function Hero({ img, pageTitle }) {
  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "70vh",
    maxHeight: "600px"
  }
  return (
    <section className="h-full flex flex-col justify-end" style={style}>
      <div className="bg-transparent-purple">
        <h1 className="text-4xl text-white py-9 text-center font-bold ">{pageTitle}</h1>
      </div>
    </section>
  );
}

export default Hero;
