import React, { useEffect, useState } from "react";

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const hourRotation = (hours % 12) * 30 + minutes * 0.5; 
  const minuteRotation = minutes * 6; 
  const secondRotation = seconds * 6; 

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
     
      <div className="w-60 bg-violet-950 flex justify-center items-center h-10 text-green-400 gap-5 mb-8">
        <h1>Hr: {hours}</h1>
        <h1>Min: {minutes}</h1>
        <h1>Sec: {seconds}</h1>
      </div>

      
      <div className="clock relative">
        <div
          className="hrhand absolute bg-black"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        ></div>
        <div
          className="minhand absolute bg-black"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        ></div>
        <div
          className="sechand absolute bg-red-500"
          style={{ transform: `rotate(${secondRotation}deg)` }}
        ></div>

      
        {[...Array(12)].map((_, idx) => (
          <div
            key={idx}
            className="num absolute text-center"
            style={{
              transform: `rotate(${idx * 30}deg) translate(8rem) rotate(-${idx * 30}deg)`,
            }}
          >
            {idx + 1}
          </div>
        ))}
        <div className="center absolute bg-black"></div>
      </div>
    </div>
  );
};

export default App;
