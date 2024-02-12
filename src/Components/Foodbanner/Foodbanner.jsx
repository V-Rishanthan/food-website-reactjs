import React from "react";
// import bg1 from "../../Assets/leaf/banner-bg-02 (1).png";
// import bg2 from "../../Assets/leaf/banner-bg-03-new.png";
// import bg3 from "../../Assets/leaf/banner-bg-04.png";

const Foodbanner = ({ foodBanner }) => {
  return (
    <div className="p-4 md:m-auto md:max-w-[1240px] mt-7">
      <div className="grid-cols-1  grid  sm:grid-cols-3 gap-4">
        {foodBanner.map((foodBanner__item) => (
          <div
            key={foodBanner__item.id}
            className="relative flex  justify-center bg-slate-500"
          >
            <div className="absolute flex justify-center">
              <img src={foodBanner__item.hoverImage[0].url} alt="" />{" "}
            </div>

            <div className="w-full">
              <img
                src={foodBanner__item.bgImage[0].url}
                alt=""
                className="h-[200px] w-full"
              />
            </div>

            <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between p-7">
              <div className="text-center">
                <span className="text-white  text-xl uppercase font-displayHead ">
                  {foodBanner__item.topTitle}
                </span>
              </div>
              <div className="flex justify-between">
                <div className=" w-full">
                  <h1 className="text-[17px] lg:text-2xl font-semibold text-white mt-2 uppercase">
                    {foodBanner__item.heroTitle}
                  </h1>
                  <button className="px-3 py-2 border mt-3 text-[14px] border-white text-white">
                    Order Now
                  </button>
                </div>
                <div className=" flex justify-end ">
                  <img
                    src={foodBanner__item.image[0].url}
                    alt=""
                    className="w-10/12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodbanner;
