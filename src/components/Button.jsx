import React from "react";

function Button({ content, bgColor, textColor }) {
  return (
    <button className={`bg-${bgColor} text-${textColor} text-lg py-3 px-4 w-fit rounded-lg`}>
      {content}
    </button>
  );
}

export default Button;
