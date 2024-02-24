import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiFillTag,
} from "react-icons/ai";
import { useState } from "react";
import {BsFillCartFill,BsSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdHelp, MdFavorite} from 'react-icons/md'

function Navbar() {
  const [hideNav,setHideNav] = useState(false)
  console.log("nav",hideNav)
  return (
    <div className=" max-w-[1200px] mx-auto flex justify-between p-4 items-center ">
      {/* left side  */}
      <div className="flex items-center" >
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={()=>{
        // console.log("clicked ... ")
        setHideNav(!hideNav)
      }
      }
         />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl p-2">
          Chicken
          <span className="font-bold ">Dinner</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px]  gap-1 items-center">
          <p className="bg-black text-white rounded-full p-1">Delvier</p>
          <p>Pickup</p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="bg-gray-200 flex items-center  rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch className="cursor-pointer" size={25} />
        <input
          className="w-full  rounded-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Type SomeThing To Search"
        />
      </div>
      {/* card */}
      <button className="bg-black rounded-full hidden text-white md:flex items-center gap-1 px-4 py-2">
        <AiOutlineShoppingCart />
        Cart
      </button>
      {/* addidng overlay */}
      <div className={hideNav ? "bg-black/80 w-full  h-screen fixed top-0 left-0  z-10" :""}></div>
      {/* side bar */}
      <div className={hideNav ? "absolute bg-white left-0 top-0 h-screen w-[250px]   duration-300 z-10": "absolute bg-white left-[-100%] top-0 h-screen w-[250px] duration-300 z-10 "}>
        <AiOutlineClose size={25} className="absolute right-2 top-4 cursor-pointer" onClick={()=>{
        // alert("click")
        setHideNav(!hideNav)}}/>
         <h1 className="p-4 text-xl"><span>Best</span> <span className="font-bold ">Chicken</span></h1>
      <nav>
         <ul className="flex flex-col gap-1  ">
            <li className="flex gap-3 p-2  items-center hover:bg-gray-200">
               <TbTruckDelivery/>
               Orders
            </li>
            <li className="flex gap-3 p-2  items-center   hover:bg-gray-200">
               <MdFavorite/>
               Favorites
            </li>
            <li className="flex gap-3 p-2  items-center  hover:bg-gray-200">
               <FaWallet/>
               Wallets
            </li>
            <li className="flex gap-3 p-2  items-center  hover:bg-gray-200">
               <MdHelp/>
               Help
            </li>
            <li className="flex gap-3 p-2  items-center  hover:bg-gray-200">
               <AiFillTag/>
               Promotions
            </li>
            <li className="flex gap-3 p-2  items-center  hover:bg-gray-200">
               <BsSaveFill/>
               Best Ones
            </li>
            <li className="flex gap-3 p-2  items-center  hover:bg-gray-200">
               <FaUserFriends/>
               Invite Friends
            </li>
         </ul>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
