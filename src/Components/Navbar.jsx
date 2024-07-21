import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import {
  FaCartPlus,
  FaPlus,
  FaSignInAlt,
  FaSun,
  FaUser,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";

import { AppCont } from "./AppContext";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp, MdOutlineRestaurantMenu } from "react-icons/md";
import { BsSaveFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";

function Navbar() {
  const { dark, setDark } = useContext(AppCont);

  const [hideNav, setHideNav] = useState(false);

  return (
    <div
      className={` max-w-[1200px] mx-auto flex justify-between p-4 items-center shadow-sm border-b-orange-500 border-1  ${
        dark ? "bg-[#121212]  text-[#F2F2F2] " : "bg-white text-black"
      } `}
    >
      {/* left side  */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            size={30}
            onClick={() => {
              // console.log("clicked ... ")
              setHideNav(!hideNav);
            }}
          />
        </div>
        <div className="flex items-center gap-5 mx-5">
          <Link className="text-orange-500 font-bold text-xl uppercase" to="/">
            Chicken
          </Link>
        </div>
      </div>
      {/* Search Bar */}
      <div
        className={`${
          dark ? "bg-black text-white " : "bg-white text-black"
        }  flex relative items-center  rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]"`}
      >
        <input
          className="w-full  rounded-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder=" Search"
        />
        <AiOutlineSearch
          className="cursor-pointer absolute right-4"
          size={25}
        />
      </div>
      {/* card */}
      <div className="flex gap-5 items-center">
        <button className="bg-orange-500 rounded-full flex items-center justify-center text-white  gap-1 px-3 py-1">
          <FaSun onClick={() => setDark(!dark)} size={20} />
        </button>
        <button className="bg-orange-500 rounded-full flex items-center justify-center text-white  gap-1 px-3 py-1">
          <Link to={"/cart"} onClick={() => setDark(!dark)} size={20}>
            <FaCartPlus />
          </Link>
        </button>
      </div>
      {/* addidng overlay */}
      <div
        className={
          hideNav
            ? "bg-[#333333] opacity-30 w-full  h-screen fixed top-0 left-0  z-10"
            : ""
        }
      ></div>
      {/* side bar */}
      <div
        className={`
            ${dark ? "bg-[#121212] text-[#F2F2F2] " : "bg-white text-black"}
          ${
            hideNav
              ? "absolute left-0 top-0 h-screen w-[250px]    duration-300 z-10"
              : "absolute left-[-100%] top-0 h-screen w-[250px] duration-300 z-10 "
          }
           `}
      >
        <AiOutlineClose
          size={25}
          className="absolute right-2 top-4 cursor-pointer"
          onClick={() => {
            // alert("click")
            setHideNav(!hideNav);
          }}
        />
        <h1 className="p-4 text-xl">
          <Link
            onClick={() => {
              // alert("click")
              setHideNav(!hideNav);
            }}
            to={"/"}
          >
            <span>Best</span> <span className="font-bold ">Chicken</span>
          </Link>
        </h1>
        <nav>
          <ul
            className={`flex flex-col gap-1 ${
              dark ? "bg-[#121212]  text-[#F2F2F2] " : "bg-white text-black"
            }   "`}
          >
            <Link
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              to={"/cart"}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <FaCartPlus />
              Cart
            </Link>
            <Link
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              to={"/dashboard"}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <BsSaveFill />
              Dashboard
            </Link>
            <Link
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              to={"/create-menu"}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <MdOutlineRestaurantMenu />
              Create Menu
            </Link>
            <Link
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              to={"/register"}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <FaPlus />
              Register
            </Link>
            <Link
              to={"/category"}
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <BiSolidCategory />
              Category
            </Link>
            <Link
              to={"/contact-us"}
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <FaUser />
              Contact Us
            </Link>
            <Link
              to={"/login"}
              onClick={() => {
                // alert("click")
                setHideNav(!hideNav);
              }}
              className={`flex gap-3 p-2  items-center  ${
                dark ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              <FaSignInAlt />
              Login
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
