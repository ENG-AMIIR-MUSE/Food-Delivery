import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AppCont } from "./AppContext";
import { MdOutlineNotInterested } from "react-icons/md";
import toast from "react-hot-toast";

export default function Cart() {
  const { contextValue } = useContext(AppCont);
  const {
    items,
    addOneToCart,
    getTotalCost,
    deleteFromCart,
    removeOneFromCart,
  } = contextValue;

  console.log("items ", items);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };
  const handledeleteFromCart = (item) => {
    deleteFromCart(item);
    toast.success("Item Removed From Cart");
  };
  const handleremoveOneFromCart = (item) => {
    removeOneFromCart(item);
    toast.success("Item Deleted Successfully");
  };
  const handleAddToCart = (item) => {
    addOneToCart(item);
    toast.success("Item Quantity Increased");
  };

  return (
    <div className="max-w-[1200px] m-auto p-1  shadow-md h-[80vh]">
      {items?.length > 0 ? (
        items?.map((item) => {
          return (
            <>
              <div key={item.id} className="flex gap-5 m-3  ">
                {/* left image */}
                <div className="w-[100px] rounded-md h-[100px]">
                  <img
                    className="w-full h-full rounded-md object-center object-cover"
                    src={item.image}
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <h1>{item.name}</h1>
                    <FaTrash onClick={() => handledeleteFromCart(item.id)} />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Quantity : {item.quantity}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h3>Total Cost : ${getTotalCost(item.id)}</h3>

                    <div className="flex items-center gap-5">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="p-2 border-none outline-none  bg-orange-500 text-white rounded-md "
                      >
                        +
                      </button>
                      <p className="font-bold">Cart : 0</p>
                      <button
                        onClick={() => handleremoveOneFromCart(item)}
                        className="p-2 border-none outline-none  bg-orange-500 text-white rounded-md "
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div className="text-xl flex flex-col gap-3 justify-center items-center h-screen">
          <span>
            {" "}
            <MdOutlineNotInterested size={100} />
          </span>
          <span>There Is No Any Cart Yet .</span>
        </div>
      )}
      <button
        onClick={checkout}
        className={`${
          items.length == 0 && "hidden"
        } bg-orange-500 text-white w-full py-2 rounded-md `}
      >
        Proceed Payment
      </button>
    </div>
  );
}
