import React, { useContext } from "react";
import { AppCont } from "../Components/AppContext";
import { Link } from "react-router-dom";

export default function MenuCreationPage() {
  const { dark } = useContext(AppCont);
  return (
    <>
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
            <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
              Sign In Your Account{" "}
            </h5>
          </div>

          <div className="flex flex-col gap-5">
            <form class="">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
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
                <div class="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    id="number"
                    className={`${
                      dark ? "bg-gray-700" : "bg-gray-100"
                    } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
                    placeholder="Price $1200"
                    required
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <select
                    id="category"
                    className={`  ${
                      dark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
                    } border border-gray-300  text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500`}
                  >
                    <option
                      className={`${dark ? "text-white" : "text-blue-500"}`}
                      selected=""
                    >
                      Select category
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="TV"
                    >
                      TV/Monitors
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="PC"
                    >
                      PC
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="GA"
                    >
                      Gaming/Console
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="PH"
                    >
                      Phones
                    </option>
                  </select>
                </div>

                <div class="col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <input
                    type="text"
                    id="des"
                    className={` h-[100px] ${
                      dark ? "bg-gray-700" : "bg-gray-100"
                    } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
                    placeholder="Example@gmail.com"
                    required
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="w-full text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Create your Menu
            </button>
          </div>
        </div>
      </div>

      {/* <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
      
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
        
          
        </div>
    </div>
</div>  */}
    </>
  );
}
