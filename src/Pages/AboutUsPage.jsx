import React from "react";
import { FaCartPlus } from "react-icons/fa";
import amir from "../assets/amir.jpg";
import ibra from "../assets/ibra2.jpg";
import ibra2 from "../assets/ibra.jpg";
import sacid from "../assets/sacid.jpg";
import ahmed from "../assets/ahmed.png";

export default function AboutUsPage() {
  const data = [
    {
      id: 2,
      name: "Bacon Cheeseburger",
      category: "burger",
      image: amir,
      price: "$",
    },
    {
      id: 2,
      name: "Bacon Cheeseburger",
      category: "burger",

      image: ibra,
      price: "$",
    },
    {
      id: 2,
      name: "Bacon Cheeseburger",
      category: "burger",
      image: ibra2,
      price: "$",
    },
    {
      id: 2,
      name: "Bacon Cheeseburger",
      category: "burger",
      image: sacid,
      price: "$",
    },
  ];
  return (
    <div className="max-w-[1200px] m-auto mt-5">
      <div className="flex flex-col items-center  gap-5   justify-center">
        <div className="flex flex-col  items-center justify-center"></div>
        <div className=" w-full md:flex   gap-10  p-5">
          <div className="md:w-1/2 h-[200px] w-full ">
            <img
              className="w-full h-full object-cover object-center"
              src={ahmed}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Ahmed Mohamed Abdikadir</h2>
            <p className="dark:text-gray-800">
              A passionate MOBILE & MERN stuck developer from Somalia
            </p>
            <div className="border-b border-2 border-orange-500 my-3"></div>
            <p className="dark:text-gray-800">
              Our teacher, with years of experience in the field of software
              development, has been an incredible mentor. As an instructor at
              Jamhuriay, he has tirelessly dedicated his time to ensure we
              understand and master React. His deep knowledge and teaching
              skills have greatly impacted our learning journey. We are
              profoundly thankful to him for his unwavering support and
              guidance.
            </p>
          </div>
        </div>
        <div>
          <span className="text-orange-500 font-bold text-left">Our Teams</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  mb-32 lg:grid-cols-4 gap-4 h-max py-5 p-5">
          {data.map((d) => (
            <div className="shadow-2xl hover:scale-105" key={d.id}>
              <div className=" h-[250px]">
                <img
                  className="w-full h-full object-cover object-center "
                  src={d.image}
                  alt={d.name}
                />
              </div>
              <div className="space-y-1 justify-between px-2 items-center py-2">
                <p className="font-bold">{d.name}</p>
                <div className="flex items-center justify-between">
                  <p className="  w-max text-white  py-1 rounded-full">
                    Fullstack Developer | Mobile App Developer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
