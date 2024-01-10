import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <div className=" max-w-[1200px] mx-auto flex justify-between p-4 items-center ">
      {/* left side  */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
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
         <AiOutlineSearch className ="cursor-pointer" size ={25}/>
         <input  className = "w-full  rounded-full bg-transparent p-2 focus:outline-none"type  = "text" placeholder="Type SomeThing To Search"/>

      </div>
    </div>
  );
}

export default Navbar;
