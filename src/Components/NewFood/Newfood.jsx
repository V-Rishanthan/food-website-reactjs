import React from "react";
import newfood from "../../Assets/Popular/dishes.png";
import CEO_pic from "../../Assets/CEO.jpg";

const Newfood = () => {
  return (
    <div className="bg-bgCart mt-14">
      <div className="p-4 md:m-auto md:max-w-[1240px]">
        <div className="flex-col flex justify-between gap-8 md:flex-row mt-10">
          <div className="flex">
            <img src={newfood} alt="new food item" />
          </div>
          <div>
            <span className="text-2xl font-semibold font-displayHead mb-2">
              About Company
            </span>
            <h1 className="text-6xl font-semibold mb-3">
              Where Quality Food Meet Excellent Service.
            </h1>
            <p className="mb-3 text-muteBlack">
              It's the perfect dining experience where every dish is crafted
              with fresh, high-quality ingredients and served by friendly staff
              who go
            </p>

            {/*  button and some details */}
            <div className="w-full h-[1px] bg-white border "></div>

            <div className="flex justify-between items-center">
              <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Button
              </button>
              <div className="flex gap-2">
                <div className="w-[50px] object-cover ">
                  <img
                    src={CEO_pic}
                    alt="CEO_pic"
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-[14px]">V.RishanCharan</span>
                  <span>Founder CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newfood;
