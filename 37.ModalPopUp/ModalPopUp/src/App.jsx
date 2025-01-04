import React, { useState } from "react";

const App = () => {
  const [modalactive, setModalactive] = useState(false);

  return (
    <>
      <div className="main h-screen w-full bg-slate-50 relative flex justify-center items-center">
        <button
          className="border border-red-500 text-red-500 p-1"
          onClick={() => setModalactive((p) => !p)}
        >
          Pop Up Modal
        </button>

        <div
          className={`modal h-[40%] w-[40%] ${
            modalactive ? "top-[50%] opacity-100" : "-top-[50%] opacity-0 "
          } absolute left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-slate-300 flex flex-col justify-between transition-all duration-200
          `}
        >
          <div className="bg-red-400 h-[30%] flex justify-center items-center relative">
            <h1>Custom Cheez</h1>
            <button
              onClick={() => setModalactive(false)}
              className="absolute top-[10%] left-[95%] text-black font-mono font-bold hover:text-slate-300"
            >
              X
            </button>
          </div>
          <h2 className="bg-slate-200 h-[40%] flex justify-center items-center text-center text-xs font-mono">
            Massage Lelo Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas, mollitia?
          </h2>
          <h1 className="bg-red-400 h-[30%] flex justify-center items-center">
            Custom Cheez
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
