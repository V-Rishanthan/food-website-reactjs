import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavigationInfo = () => {
  return (
    <div className="bg-headingPrimary p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-white">
        {/* Left navigation info */}
        <div className="mb-3 sm:flex flex-row items-center justify-center gap-2">
          <FaPhoneFlip />

          <span>94+ 076-346-8914</span>
        </div>

        {/* Right Navigation Info */}

        <div className="flex gap-4 text-white text-[13px]">
          <Link>Tracking</Link>
          <Link>FAQs</Link>
          <select className="select select-bordered w-[100px] max-w-xs  text-slate-700">
            <option disabled selected>
              language
            </option>

            <option>Australia</option>
            <option>Spain</option>
            <option>Brazil</option>
            <option>English</option>
            <option>France</option>
            <option>United States</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavigationInfo;
