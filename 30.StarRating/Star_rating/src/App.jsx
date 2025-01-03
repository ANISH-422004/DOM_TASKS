import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  let arr = new Array(10).fill(0); // we can get this form user

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(true)

  const handelClick =(currentIdx)=>{
    console.log(currentIdx);
    setRating(currentIdx)
    setHover(prev=>!prev)
    
  }
  const handelMouseMove = (currentIdx)=>{
    if(hover) setRating(currentIdx)
  

  }



  return (
    <div className="h-screen w-full bg-gray-300 flex justify-center items-center">
      <div className="flex text-3xl ">
        {arr.map((_,idx) => {
          return <FaStar
              className={idx <= rating ? "active" : "inactive"}
              key = {idx+1}
              onClick={()=>{handelClick(idx)}}
              onMouseMove={()=>{handelMouseMove(idx)}}
          />;
        })}
      </div>
    </div>
  );
};

export default App;
