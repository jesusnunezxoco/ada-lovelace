import React from "react";

function Impact({img, alt, title, description}) {
  return (
    <article className="">
      <img src={img} alt={alt}></img>
      <h3 className="">{title}</h3>
      <p>
     {description}
      </p>
    </article>
  );
}

export default Impact;
