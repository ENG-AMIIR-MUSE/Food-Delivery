import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { AppCont } from "../Components/AppContext";
export default function ShipperCreationPage({
  openModal,
  onCloseModal,
  setOpenModal,
}) {
  useEffect(() => {
    console.log("RENDERED");
  }, []);

  const { dark } = useContext(AppCont);

  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  console.log("info", openModal, onCloseModal, setOpenModal);

  return (
    <div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header
          className={` ${
            dark ? "bg-[#121212] text-[#F2F2F2]" : "bg-white text-black "
          }`}
        />
        <Modal.Body
          className={` ${
            dark ? "bg-[#121212] text-[#F2F2F2]" : "bg-white text-black "
          }`}
        >
          <div className="space-y-6">
            <h3 className="text-xl font-medium ">Create Shippers</h3>
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
                      Select Region
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="TV"
                    >
                      Yaqshid
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="PC"
                    >
                      Dharkinleey
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="GA"
                    >
                      Waaberi
                    </option>
                    <option
                      className={`${dark ? "text-white" : "text-black"}`}
                      value="PH"
                    >
                      CabdiCasiis
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
