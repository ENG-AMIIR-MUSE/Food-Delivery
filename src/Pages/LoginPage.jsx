import React, { useContext } from "react";
import { AppCont } from "../Components/AppContext";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { dark } = useContext(AppCont);
  return (
    <div
      className={`container m-auto h-screen flex items-center justify-center ${
        dark ? "bg-black text-gray-100" : "bg-white text-gray-700"
      }`}
    >
      <div
        className={`p-6 max-w-lg w-full border-[0.5px] border-gray-100 rounded-lg shadow ${
          dark ? "bg-black text-gray-100" : "bg-white text-black"
        }`}
      >
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight mb-5 ">
            Login Your Account{" "}
          </h5>
        </div>
     
        <div className="flex flex-col gap-5">
        
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  "
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`${
                dark ? "bg-gray-700" : "bg-gray-100"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
              placeholder="Example@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium  "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`${
                dark ? "bg-gray-700" : "bg-gray-100"
              } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-blue-500`}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
             to={'/register'}
              className="text-orange-700 hover:underline dark:text-orange-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
