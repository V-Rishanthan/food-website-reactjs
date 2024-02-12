import React, { useEffect, useState } from "react";
import { PopularFood, bannerFood, getSliderList } from "../../Services/index";
import Slider from "../../Components/Slider/Slider";
import Foodbanner from "../../Components/Foodbanner/Foodbanner";
import PopularFoodItem from "../../Components/PopularFood/PopularFoodItem";
import Newfood from "../../Components/NewFood/Newfood";

const Home = () => {
  const [sliders, setSliders] = useState([]);
  const [foodBanner, setfoodBanner] = useState([]);
  const [popular, setPopular] = useState([]);

  //  Foood Image slider
  const fetchData = async () => {
    try {
      const result = await getSliderList();
      // console.log(result);
      setSliders(result.foodSliders);
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  // FoodBanner
  const fetchFoodBanner = async () => {
    try {
      const result = await bannerFood();
      console.log(result);
      setfoodBanner(result.bannerFoods);
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  const fetchPopularFood = async () => {
    try {
      const result = await PopularFood();
      console.log(result);
      setPopular(result.popularFoods);
    } catch (error) {
      console.error("Error fetching Popular Food item:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFoodBanner();
    fetchPopularFood();
  }, []);

  return (
    <div>
      <Slider sliders={sliders} />
      <Foodbanner foodBanner={foodBanner} />
      <PopularFoodItem popular={popular} />
      {/* New food section */}
      <Newfood />
    </div>
  );
};

export default Home;
