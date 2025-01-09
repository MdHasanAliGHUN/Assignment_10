import React from "react";

const ReusableHeading = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-blue-600 font-semibold uppercase">{subheading}</p>
      <h2 className=" text-3xl lg:text-4xl font-bold text-gray-800 mt-5 capitalize">
        {heading}
      </h2>
      {description && <p className="text-gray-600 mt-5">{description}</p>}
    </div>
  );
};

export default ReusableHeading;
