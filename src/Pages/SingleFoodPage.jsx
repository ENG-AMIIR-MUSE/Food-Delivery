
import React from 'react';

// Dummy data
const food = {
  image: 'https://via.placeholder.com/150',
  title: 'Delicious Pizza',
  description: 'A tasty pizza topped with fresh ingredients and a perfect blend of cheeses.',
  price: 12.99,
  category: 'Fast Food',
  rating: 4.5,
  available: true,
};

const SingleFoodPage = () => {
  return (
    <div className='h-screen'>

    <div className="max-w-4xl mx-auto bg-white my-5 rounded-lg shadow-md overflow-hidden mt-6 flex flex-wrap ">
      <img src={food.image} alt={food.title} className="w-full md:w-1/2 h-auto object-cover" />
      <div className="w-full p-6 md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{food.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{food.description}</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">Price: ${food.price}</p>
        <div className="text-gray-700 text-sm">
          <p><strong>Category:</strong> {food.category}</p>
          <p><strong>Rating:</strong> {food.rating} / 5</p>
          <p><strong>Available:</strong> {food.available ? 'Yes' : 'No'}</p>
        </div>
        <div className="text-gray-700 text-sm">
         <button className='bg-orange-500 px-5 py-2 mt-2  outline-none border-0  text-white rounded-sm'>Add To Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleFoodPage;
