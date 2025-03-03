import React from "react";

const TechnologyUsed = ({ technologies }) => {
  return (
    <>
      <h1 className="text-2xl font-medium font-body">Technology Used</h1>
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {technologies?.map((tech, index) => (
          <div
            key={index}
            className={`${tech?.color} font-semibold capitalize text-base px-2 py-0.5 rounded-md text-slate-100 font-montserrat`}
          >
            {tech?.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default TechnologyUsed;
