import React from "react";
import { useRef } from "react";

const App = () => {
  const products = [
    { product: "Smartphone", price: 557, category: "Accessories" },
    { product: "Dishwasher", price: 542, category: "Home Appliances" },
    { product: "Water Bottle", price: 984, category: "Furniture" },
    { product: "Desk", price: 620, category: "Accessories" },
    { product: "Smartphone", price: 1191, category: "Furniture" },
    { product: "Mirror", price: 748, category: "Electronics" },
    { product: "Sunglasses", price: 1400, category: "Home Appliances" },
    { product: "Notebook", price: 267, category: "Furniture" },
    { product: "Fan", price: 501, category: "Furniture" },
    { product: "Backpack", price: 111, category: "Clothing" },
    { product: "Air Conditioner", price: 1941, category: "Furniture" },
    { product: "Jeans", price: 1188, category: "Home Appliances" },
    { product: "Tablet", price: 106, category: "Accessories" },
    { product: "Projector", price: 1560, category: "Home Appliances" },
    { product: "Microwave", price: 1116, category: "Furniture" },
    { product: "Washing Machine", price: 1156, category: "Accessories" },
    { product: "Monitor", price: 1763, category: "Clothing" },
    { product: "Air Conditioner", price: 1783, category: "Electronics" },
    { product: "Chair", price: 721, category: "Home Appliances" },
    { product: "Tablet", price: 133, category: "Home Appliances" },
    { product: "Notebook", price: 1161, category: "Stationery" },
    { product: "Power Bank", price: 640, category: "Electronics" },
    { product: "Microwave", price: 122, category: "Stationery" },
    { product: "T-Shirt", price: 783, category: "Clothing" },
    { product: "Sofa", price: 1628, category: "Accessories" },
    { product: "Power Bank", price: 1367, category: "Electronics" },
    { product: "Cookware", price: 1867, category: "Stationery" },
    { product: "Air Conditioner", price: 655, category: "Accessories" },
    { product: "Air Conditioner", price: 1520, category: "Electronics" },
    { product: "Smartwatch", price: 1353, category: "Clothing" },
    { product: "Mirror", price: 386, category: "Accessories" },
    { product: "Smartphone", price: 854, category: "Accessories" },
    { product: "Mirror", price: 857, category: "Stationery" },
    { product: "Shoes", price: 963, category: "Home Appliances" },
    { product: "Jacket", price: 1290, category: "Home Appliances" },
    { product: "Microwave", price: 1658, category: "Furniture" },
    { product: "Sunglasses", price: 372, category: "Electronics" },
    { product: "Cookware", price: 182, category: "Stationery" },
    { product: "Mirror", price: 862, category: "Electronics" },
    { product: "Cookware", price: 1339, category: "Clothing" },
    { product: "Sofa", price: 1069, category: "Accessories" },
    { product: "Coffee Maker", price: 271, category: "Clothing" },
    { product: "Bed", price: 1555, category: "Accessories" },
    { product: "Chair", price: 294, category: "Accessories" },
    { product: "Bookshelf", price: 1985, category: "Furniture" },
    { product: "Power Bank", price: 311, category: "Electronics" },
    { product: "Rug", price: 1656, category: "Clothing" },
    { product: "T-Shirt", price: 1370, category: "Furniture" },
    { product: "Dryer", price: 1875, category: "Furniture" },
    { product: "Speaker", price: 604, category: "Home Appliances" },
  ];

  const ScrollTOTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const sec3Ref = useRef(null);
  const goToSec3 = () => {
    sec3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-col items-center ">
      <h1 className=" bg-slate-500 w-full  text-center text-2xl py-4 mb-2">
        Starting of YOUR Page !!!!!!!
        <button onClick={goToSec3} className="bg-black text-white p-1 rounded">
          Section 3
        </button>
      </h1>

      <div className="w-[40%] flex flex-col items-center gap-2">
        {products.map((p, id) => {
          return (
            <div key={id} className="flex bg-red-300 w-full justify-around">
              <h1>{p.product}</h1>
              <h1>{p.price}</h1>
              <h1>{p.category}</h1>
            </div>
          );
        })}
      </div>

      <div className="my-10 bg-black text-white p-1 rounded-lg ">
        <button onClick={ScrollTOTop}>ScrollToTop</button>
      </div>

      <div ref={sec3Ref} className="bg-red-500 w-full h-[80vh] my-5 flex justify-center items-center ">
        <h1 className="text-5xl font-mono ">Section 3</h1>
      </div>
      <div  className="bg-violet-500 w-full h-[80vh] my-5 flex justify-center items-center ">
        <h1 className="text-5xl font-mono ">Section 4</h1>
      </div>


    </div>
  );
};

export default App;
