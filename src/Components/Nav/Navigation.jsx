import React, { useState } from "react";
import logo from "../../Assets/mahaaraja.png";
import { FaShoppingCart } from "react-icons/fa";

import { IoIosMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { MdOutlineFastfood } from "react-icons/md";

import { Link } from "react-router-dom";
import NavigationInfo from "./NavigationInfo";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <NavigationInfo />
      <div className="p-4  md:m-auto md:max-w-[1240px] relative">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center">
          {/* Top Navigation left*/}
          <div className="flex items-center">
            <div className="text-secondary">
              <MdOutlineFastfood size={40} />
            </div>
            <p className="text-[16px] sm:text-2xl font-bold">
              Mahaa <span className="text-secondary">Raja</span>
            </p>
          </div>
          {/* Page navigation links */}
          <div className="hidden sm:flex mt-5 justify-center">
            <ul className="flex gap-8">
              <li className="text-primary cursor-pointer">
                <Link to="/">Home</Link>
              </li>

              <li className="text-primary cursor-pointer">
                <Link to="/">Menu</Link>
              </li>

              <li className="text-primary cursor-pointer">
                <Link to="/">Our Offer</Link>
              </li>

              <li className="text-primary cursor-pointer">
                <Link to="/">About Us</Link>
              </li>
            </ul>
          </div>
          {/* Top Navigation right*/}
          <div className="flex gap-3 items-center">
            {/* shopping cart icon */}
            <div className="bg-gray-100 p-3 rounded-full">
              {" "}
              <FaShoppingCart
                size={20}
                className="cursor-pointer text-primary"
              />
            </div>
            {/*Login button*/}

            <Link
              to="/"
              className="hidden sm:flex bg-headingPrimary px-8 py-[10px] text-white rounded-lg"
            >
              Login
            </Link>
            {!toggle ? (
              <IoIosMenu
                className="sm:hidden text-[30px] text-primary cursor-pointer"
                onClick={() => setToggle(true)}
              />
            ) : (
              <HiXMark
                className="sm:hidden text-[30px] text-primary cursor-pointer"
                onClick={() => setToggle(false)}
              />
            )}
          </div>
        </div>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400 transition-opacity" />

        <div
          className={`transition-all ease-in-out duration-500 bg-headingPrimary   ${
            toggle ? "h-auto opacity-100" : "h-0 opacity-0"
          } sm:flex sm:mt-5 shadow-md justify-center`}
        >
          <ul className="flex flex-col gap-8 p-3">
            <li className="text-white cursor-pointer text-center">
              <Link to="/">Home</Link>
            </li>

            <li className="text-white cursor-pointer text-center">
              <Link to="/">Menu</Link>
            </li>

            <li className="text-white cursor-pointer text-center">
              <Link to="/">Our Offer</Link>
            </li>

            <li className="text-white cursor-pointer text-center">
              <Link to="/">About Us</Link>
            </li>

            <li className="text-white cursor-pointer text-center">
              <Link
                to="/"
                className=" bg-white px-8 py-3 text-secondary rounded-lg"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
