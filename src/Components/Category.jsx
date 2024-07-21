import React, { useContext } from "react";
import { categories } from "./data.js";
import { AppCont } from "./AppContext.jsx";

const Category = () => {
  const { dark, category } = useContext(AppCont);
  console.log(categories);
  return (
    <div
      className={`container m-auto px-4 py-12 ${
        dark ? "bg-black text-white " : "bg-white text-black"
      } `}
    >
      <h1 className="text-orange-600 font-bold text-2xl sm:text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {category.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 dark:border-2 dark:border-orange-500 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
