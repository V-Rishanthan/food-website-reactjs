import React from "react";
import SectionHeading from "../../GlobalStyle/SectionHeading";
import { FaCartPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Button from "../../GlobalStyle/Button";

const PopularFoodItem = ({ popular }) => {
  return (
    <div className="p-4 md:m-auto md:max-w-[1240px]">
      <div>
        <SectionHeading
          subText={"Best Food Menu"}
          heroHeading={"Our Popular Food Items"}
        />
      </div>
      <div className="">
        <div className="grid xs:grid-cols-2 sm:grid-cols-3  md:grid-cols-4  gap-3 justify-between h-full">
          {popular.map((popularItem) => (
            <div
              key={popularItem.id}
              className="bg-bgCart h-full  p-5 flex flex-col"
            >
              <div className="flex justify-center">
                <img
                  src={popularItem.image[0].url}
                  alt=""
                  className="w-10/12 object-cover"
                />
              </div>
              <span className="text-[17px] font-semibold mb-4 inline-block ">
                {popularItem.subPopular}
              </span>

              <p className="text-[14px] text-muteBlack flex-grow">
                {popularItem.popularHeroTitle}
              </p>
              <div className="flex justify-between mt-3 ">
                <p className="font-bold text-secondary">
                  {" "}
                  ${popularItem.price}
                </p>
                <p className="flex font-light">
                  <IoIosStar /> <span>5.4</span>
                </p>
              </div>

              {/*  add item Button */}
              <Button text={" Add Item"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFoodItem;
