import React, { useContext, useState } from "react";

import { AppCont } from "./AppContext";
import { Link } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

export default function Food() {
  const { dark, setDark, data, setData, contextValue } = useContext(AppCont);
  const { addOneToCart } = contextValue;
  const { removeOneFromCart } = contextValue;

  console.log("Items", contextValue.items);

  const filterType = (category) => {
    setData(
      data.filter((item) => {
        return item.category.toLowerCase() === category.toLowerCase();
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setData(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div
      className={`container m-auto p-5 ${
        dark ? "bg-black text-white " : "bg-white text-black"
      } `}
    >
      <h1 className="text-orange-500 text-3xl text-center font-bold ">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col  md:flex-row   md:justify-between md:items-center">
        <div className="flex flex-col justify-center mt-3">
          <h1 className="font-bold ">Filter Types</h1>
          <div className="flex justify-between mt-3 gap-4">
            <button
              onClick={() => {
                setData(data);
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1 "
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("pizza");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1 "
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType("burger");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1  "
            >
              Burger
            </button>
            <button
              onClick={() => {
                filterType("salad");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1  "
            >
              Salad
            </button>

            <button
              onClick={() => {
                filterType("chicken");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500  py-1 "
            >
              chicken
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-3">
          <h1 className="font-bold">Filter Price</h1>
          <div className="flex md:justify-center mt-3 gap-4">
            <button
              onClick={() => {
                setData(data);
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1 "
            >
              All
            </button>
            <button
              onClick={() => {
                filterPrice("$");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1 "
            >
              $
            </button>
            <button
              onClick={() => {
                filterPrice("$$");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1  "
            >
              $$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500 py-1  "
            >
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$$");
              }}
              className="px-3 bg-transparent border border-orange-500  rounded-lg text-orange-500  py-1 "
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  h-max py-5 ">
        {data.map((d) => (
          <Link
            // to={"/fooditem"}
            className="  shadow-2xl hover:hover:scale-105"
            key={d.id}
          >
            <div className="w-full h-[230px]">
              <img
                className="w-full h-full object-cover"
                src={d.image}
                alt=""
              />
            </div>
            <div className=" space-y-1 justify-between px-2 items-center py-2">
              <p className="font-bold">{d.name}</p>
              <div className="flex items-center justify-between">
                <p className="font-bold bg-orange-500 w-max text-white  px-3 py-1 rounded-full ">
                  {d.price}
                </p>
                <button
                  onClick={() => addOneToCart(d)}
                  // onClick={() => removeOneFromCart(d.id)}
                  className="font-bold   px-3 py-1 rounded-full "
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
