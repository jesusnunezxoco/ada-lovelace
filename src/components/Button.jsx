import React from "react";

function Button({ content, classes }) {
  return (
    <button className={`text-lg py-3 px-4 w-fit rounded-lg font-bold ${classes}`}>
      {content}
    </button>
  );
}

export default Button;
