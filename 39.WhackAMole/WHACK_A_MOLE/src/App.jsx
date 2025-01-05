import React from "react";

import holeImg from "./images/hole.png";
import moleImg from "./images/mole.png";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [score, setscore] = useState(0);
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [timeup, setTimeup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let randidx = Math.floor(Math.random() * moles.length);
      let newmole = [...moles];
      newmole[randidx] = true;
      setMoles(newmole);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setTimeup(true)
      setMoles(Array(9).fill(false))
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Whackmole = (clickedidx) => {
    if (moles[clickedidx] != false) {
      let newmole = [...moles];
      newmole[clickedidx] = false;
      setscore(score + 1);
      setMoles(newmole);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-700 flex flex-col items-center gap-2  ">
      <h1 className="w-full text-center text-4xl text-yellow-300 ">
        {" "}
        Whack A Mole
      </h1>
      <h1 className="w-full text-center text-4xl font-mono text-yellow-300 ">
        score <span className="text-white ">{score}</span>
      </h1>

      <div className="grid grid-cols-3 gap-4 h-[60vh] bg-slate-50 aspect-square p-4">
        {moles.map((ismole, index) => (
          <img
            onClick={() => {
              Whackmole(index);
            }}
            className="w-full h-full object-cover"
            src={ismole ? moleImg : holeImg}
            alt="Hole"
          />
        ))}
      </div>

      {timeup ? (
        <h1 className="w-full text-center text-4xl font-mono text-yellow-300 ">
          Time Up !!
        </h1>
      ) : null}
    </div>
  );
};

export default App;
