import React from "react";

function WhatWeDo() {
  return (
    <article className="xl:grid xl:grid-cols-2 md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse">
      {/* content */}
      <div className="bg-lightest-purple flex flex-col justify-center px-12 py-16">
        <div className="container mx-auto">
          <h3 className="text-2xl mb-6 capitalize">Literacy Porgrams</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
            convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
            magna id, fringilla efficitur enim. Quisque luctus vehicula odio vel
            eleifend. Proin elementum sit amet turpis vitae blandit.
          </p>
          <button className="bg-dark-purple text-white text-lg py-3 px-4 w-fit">
            Explore Literacy Services
          </button>
        </div>
      </div>
      {/* image */}
      <div>
        <img alt="What we did" src={wedoImg} className="w-full" />
      </div>
    </article>
  );
}

export default WhatWeDo;
