import React from "react";

const SectionHeading = ({ subText, heroHeading }) => {
  return (
    <div className="text-center p-16">
      <span className="text-[16px] inline-block text-lightGree">{subText}</span>
      <h1 className="text-2xl md:text-3xl font-semibold text-primaryText mt-2">
        {heroHeading}
      </h1>
    </div>
  );
};

export default SectionHeading;
