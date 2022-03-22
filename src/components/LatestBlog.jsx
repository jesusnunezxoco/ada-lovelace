import React from "react";
function LatestBlog({ alt, title, date, content, image, path }) {
  return (
    <article className="flex flex-col  border-t-16 border-t-lime-green shadow-xl mb-5 max-w-4">
      <div className="">
      <img src={image} alt={alt} className="w-full"/>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <h3 className="text-2xl mt-1">{title}</h3>
        <h4 className="bold my-2">{date}</h4>
        <p className="my-3">{content}</p>
        <div className="text-right">
          <a href={path} className="font-bold text-dark-purple">
            Read {title}
          </a>
        </div>
      </div>
    </article>
  );
}

export default LatestBlog;
