import React, { useContext, useState } from "react";
import { AppCont } from "./AppContext";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Food() {
  const { dark, setDark, data, setData, contextValue } = useContext(AppCont);
  const { addOneToCart } = contextValue;
  const { removeOneFromCart } = contextValue;
  const [filteredData, setFilteredData] = useState(data);

  const filterType = (category) => {
    if (category === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === category));
    }
  };

  // Filter by price using min and max values
  const filterPrice = (minPrice, maxPrice) => {
    setFilteredData(
      data.filter((item) => item.price >= minPrice && item.price <= maxPrice)
    );
  };

  function handleCart(d) {
    addOneToCart(d);
    toast.success("Item Added To The Cart");
  }

  return (
    <div
      className={`container m-auto p-5 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-orange-500 text-3xl text-center font-bold">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col justify-center mt-3">
          <h1 className="font-bold">Filter Types</h1>
          <div className="flex justify-between flex-wrap mt-3 gap-4">
            <button
              onClick={() => filterType("all")}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("burger")}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("salad")}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              Chicken
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-3">
          <h1 className="font-bold">Filter Price</h1>
          <div className="flex md:justify-center mt-3 gap-4">
            <button
              onClick={() => filterPrice(1, 3)}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              1-3
            </button>
            <button
              onClick={() => filterPrice(4, 7)}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              4-7
            </button>
            <button
              onClick={() => filterPrice(8, 11)}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              8-11
            </button>
            <button
              onClick={() => filterPrice(12, 20)}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              12-20
            </button>
            <button
              onClick={() => setFilteredData(data)}
              className="px-3 bg-transparent border border-orange-500 rounded-lg text-orange-500 py-1"
            >
              All
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-max py-5">
        {filteredData.map((d) => (
          <Link
            // to={"/fooditem"}
            className="shadow-2xl hover:scale-105"
            key={d.id}
          >
            <div className="w-full h-[230px]">
              <img
                className="w-full h-full object-cover"
                src={d.image}
                alt={d.name}
              />
            </div>
            <div className="space-y-1 justify-between px-2 items-center py-2">
              <p className="font-bold">{d.name}</p>
              <div className="flex items-center justify-between">
                <p className="font-bold bg-orange-500 w-max text-white px-3 py-1 rounded-full">
                  ${d.price}
                </p>
                <button
                  onClick={() => handleCart(d)}
                  className="font-bold px-3 py-1 rounded-full"
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
