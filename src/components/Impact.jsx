import React from "react";

function Impact({img, alt, title, content}) {
  return (
    <article className="text-center my-3">
      <img src={img} alt={alt} className="mx-auto"></img>
      <h3 className="my-3 text-2xl">{title}</h3>
      <p >
     {content}
      </p>
    </article>
  );
}

export default Impact;
