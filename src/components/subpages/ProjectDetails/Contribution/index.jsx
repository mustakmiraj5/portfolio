import React from "react";

const Contribution = ({ responsibilities, titleColors }) => {
  return (
    <>
      <h1 className="text-2xl font-medium font-body">Contribution</h1>
      <p>I was Responsible for: </p>
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {responsibilities?.map((responsibility, index) => (
          <div key={index} className="project_feature">
            <div
              className="font-semibold capitalize text-base px-2 py-0.5 rounded-md text-gray-900 font-montserrat"
              style={{ backgroundColor: titleColors?.[index] }}
            >
              {responsibility}
            </div>
            <div className="project_feature_title font-montserrat font-medium top-full left-1/2 transform -translate-x-1/2 w-full bg-slate-100 text-gray-900 px-2 py-1 rounded-md text-sm opacity-0 transition-opacity duration-300 pointer-events-none">
              {responsibility}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contribution;
