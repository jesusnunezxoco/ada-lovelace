import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="py-5 flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl mb-3">{title}</h2>
      <hr className="border-b-4 rounded w-32 border-light-purple" />
    </div>
  );
}

export default SectionTitle;
