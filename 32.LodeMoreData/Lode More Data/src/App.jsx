import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setcount] = useState(0);
  const buttonRef = useRef(null);

  const fetchdata = async () => {
    try {
      let res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count}&select=title,price`
      );
      let data = await res.json();
      let fetchedproducts = data.products;
      setProducts((prev) => [...prev, ...fetchedproducts]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [count]);
  console.log(count);
  

  return (
    <div className="container h-screen w-full p-4 flex flex-col items-center bg-black">
      <div className="h-[90vh] w-full p-1 flex flex-wrap gap-2 overflow-y-auto">
        {products.map((p, idx) => {
          return (
            <div
              key={idx}
              className="border border-green-400 text-white p-2 rounded w-32 h-40 text-[0.7rem] flex-shrink-0 flex flex-col justify-between"
            >
              <h1 className="border border-green-300 h-14 overflow-hidden">
                {p.title}
              </h1>
              <h3>id:{p.id}</h3>
              <h2>${p.price}</h2>
            </div>
          );
        })}
      </div>

      <button
        ref={buttonRef}
        className={`lodemore px-4 py-2 rounded-md mt-4 ${
          count >= 100 ? "bg-gray-400 pointer-events-none" : "bg-green-500"
        }`}
        onClick={() => {
          if (count <= 90) {
            setcount((prev) => prev + 10);
          }
        }}
      >
        {count == 100 ? "No More Products to Display" : "Load More Data"}
      </button>
    </div>
  );
};

export default App;
