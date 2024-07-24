import React, { createContext, useState } from "react";

export const AppCont = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});
export default function AppContext({ children }) {
  const [dark, setDark] = useState(true);
  const [cartFood, setCartFood] = useState([]);
  // context value here

  // getFood Quantity
  function getProductQuantity(id) {
    const quantity = cartFood.find((food) => food.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  // addOneToCart
  function addOneToCart({ id, name, category, image, price }) {
    console.log("called", id);

    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartFood([
        ...cartFood,
        {
          quantity: 1,
          category: category,
          image: image,
          name: name,
          price,
          id: id,
        },
      ]);
      // food  is not in the cart
    } else {
      // food is in the cart
      // find the food item .  then incremetn its quantity
      setCartFood(
        cartFood.map((food) =>
          food.id === id ? { ...food, quantity: food.quantity + 1 } : food
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartFood(cartFood.filter((food) => food.id != id));
  }

  function removeOneFromCart({ id }) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartFood(
        cartFood.map((food) =>
          food.id === id ? { ...food, quantity: food.quantity - 1 } : food
        )
      );
    }
  }
  function getTotalCost(id) {
    let totalCost = 0;

    // find food item
    const foodItem = cartFood.find((food) => food.id == id);
    let quantity = getProductQuantity(id);

    console.log("id in totalcost", quantity, foodItem.quantity, foodItem.price);
    totalCost += foodItem.price * foodItem.quantity;
    return totalCost;
  }

  const contextValue = {
    items: cartFood,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  // data and category state  here :
  const [data, setData] = useState([
    {
      id: "prod_QWoIWbgf7Q4Cii",
      name: "Double Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 10,
    },
    {
      id: "prod_QWoIhuIpdIsUbU",
      name: "Bacon Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: 5,
    },
    {
      id: "prod_QWoImdp60Ex1ma",
      name: "Mushroom Burger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: 7,
    },
    {
      id: "prod_QWoI2rb6oakRTi",
      name: "Loaded Burger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 12,
    },
    {
      id: "prod_QWoILvVIfCt5tU",
      name: "Feta & Spinach Pizza",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 8,
    },
    {
      id: "prod_QWoIHuWELlTFbK",
      name: "Supreme Pizza",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 15,
    },
    {
      id: "prod_QWoIeXSJQanaiF",
      name: "Meat Lovers Pizza",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 20,
    },
    {
      id: "prod_QWoIHJ2RUq19hI",
      name: "Cheese Pizza",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 6,
    },
    {
      id: "prod_QWoIqBzJA2SsBh",
      name: "Kale Salad",
      category: "salad",
      image:
        "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 9,
    },
    {
      id: "prod_QWoIb9nDRhr9MU",
      name: "Caesar Salad",
      category: "salad",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 13,
    },
    {
      id: "prod_QWoIPqdQBQY2rw",
      name: "Loaded Salad",
      category: "salad",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 18,
    },
    {
      id: "prod_QWoIQuOLYuCS2p",
      name: "Fruit Salad",
      category: "salad",
      image:
        "https://images.unsplash.com/photo-1564093497595-593b96d3c86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbGFkJTIwY2VhZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: 11,
    },
  ]);
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
    {
      id: 7,
      name: "Best Overall",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png",
    },
    {
      id: 8,
      name: "Shipped Free",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png",
    },
  ]);

  return (
    <AppCont.Provider
      value={{
        dark,
        setDark,
        data,
        setData,
        category,
        setCategory,
        contextValue,
      }}
    >
      <div
        className={`${
          dark ? "bg-[#121212] text-[#F2F2F2]" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </AppCont.Provider>
  );
}
