import React, { useState } from "react";
import ShipperCreationPage from "./ShipperCreationPage";
import { FaEdit, FaTrash } from "react-icons/fa";

// Dummy data
const dashboardData = {
  totalOrders: 120,
  pendingOrders: 20,
  completedOrders: 100,
  totalShippers: 5,
};

const shippers = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Shipper",
    contact: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Junior Shipper",
    contact: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Shipper",
    contact: "bob.johnson@example.com",
  },
  {
    id: 4,
    name: "Alice Davis",
    position: "Shipper",
    contact: "alice.davis@example.com",
  },
  {
    id: 5,
    name: "Charlie Brown",
    position: "Shipper",
    contact: "charlie.brown@example.com",
  },
];

const DashboardPage = () => {
  const [openModal, setOpenModal] = useState(false);

  console.log("modal", openModal);
  function onCloseModal() {
    setOpenModal(!openModal);
  }
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className=" p-6 rounded-lg shadow-md bg-red-500">
            <h3 className="text-xl font-semibold text-white mb-2">
              Total Orders
            </h3>
            <p className="text-3xl font-bold text-white">
              {dashboardData.totalOrders}
            </p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Pending Orders
            </h3>
            <p className="text-3xl font-bold text-white">
              {dashboardData.pendingOrders}
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Completed Orders
            </h3>
            <p className="text-3xl font-bold text-white">
              {dashboardData.completedOrders}
            </p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Total Shippers
            </h3>
            <p className="text-3xl font-bold text-white">
              {dashboardData.totalShippers}
            </p>
          </div>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Shippers</h2>
            <button
              onClick={() => setOpenModal(!openModal)}
              className="bg-orange-500  rounded-md px-5 text-white py-1 border-none outline-none"
            >
              Add New
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Position</th>
                  <th className="py-2 px-4 border-b">Contact</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {shippers.map((shipper) => (
                  <tr key={shipper.id}>
                    <td className="py-2 px-4 border-b">{shipper.name}</td>
                    <td className="py-2 px-4 border-b">{shipper.position}</td>
                    <td className="py-2 px-4 border-b">{shipper.contact}</td>
                    <td className="py-2 px-4 border-b">
                      <span className="flex justify-between items-center">
                        <FaEdit />
                        <FaTrash />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ShipperCreationPage
        openModal={openModal}
        onCloseModal={onCloseModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default DashboardPage;
