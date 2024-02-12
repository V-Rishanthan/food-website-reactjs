import React, { useState, useEffect } from "react";
import "./Slider.css"; // Import the CSS file for styling
import Bg1 from "../../Assets/leaf/rev_home8_1.png";
import Bg2 from "../../Assets/leaf/rev_home5_5.png";
import Bg3 from "../../Assets/leaf/rev_home5_6.png";

const Slider = ({ sliders }) => {
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    if (!sliders || sliders.length === 0) {
      return; // Early return if sliders are not available
    }

    const interval = setInterval(() => {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % sliders.length);
        setAnimationClass("fade-in");
      }, 500); // Wait for fade-out animation to complete (adjust timing as needed)
    }, 100000); // Change slide every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [sliders]);

  if (!sliders || sliders.length === 0) {
    return null; // Render nothing if no sliders are available
  }

  const { id, hero, foodinfo, image } = sliders[index];

  return (
    <div className="flex overflow-hidden items-center slider-container">
      <div
        className={`p-4 md:m-auto md:max-w-[1240px] flex overflow-hidden slider-content ${animationClass}`}
      >
        <div className="flex-col min-w-full sm:flex-row flex sm:justify-between gap-3  items-center">
          <div className="flex flex-col p-4 mt-5 justify-between">
            <div className="flex justify-between">
              <img
                src={Bg2}
                alt="bg image 2"
                className="w-1/4 object-cover md:w-ful"
              />
              <img
                src={Bg3}
                alt="bg image 3"
                className=" w-1/4 object-cover md:w-ful"
              />
            </div>
            <h2 className="mt-2 text-4xl md:text-7xl font-semibold mb-2 text-headingPrimary">
              {hero}
            </h2>
            <p className="text-[16px] mt-3 text-headingPrimary">{foodinfo}</p>
            <div>
              <button className="px-9 py-3 mt-4 bg-secondary text-white">
                Buy Now
              </button>
              <div className="flex justify-end">
                <img
                  src={Bg1}
                  alt="bg image"
                  className="w-1/4 object-cover md:w-ful"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src={image[0].url}
              alt={`Slider ${id} - ${hero}`}
              className="w-full object-cover z-10 slider-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
