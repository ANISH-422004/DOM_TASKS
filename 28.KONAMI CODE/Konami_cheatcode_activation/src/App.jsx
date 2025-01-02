import React, { useState, useEffect } from "react";

const App = () => {
  const [sequence, setSequence] = useState([]); // Track the key sequence
  const [showDiv, setShowDiv] = useState(false); // Control div visibility
  const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]; // Konami code

  useEffect(() => {
    const handleKeyUp = (event) => {
      setSequence((prevSequence) => {
        const updatedSequence = [...prevSequence, event.key];
        // Keep only the last `secretCode.length` keys
        if (updatedSequence.length > secretCode.length) { //[a,a,a] code and sequence [a,a,a,b] then pop one from behind [a,a,b] then alawys check for that seqence then ever thing sequence is changing ..... in diff usestate eith [sequence]                          *
          updatedSequence.shift();                                                  
        }
        return updatedSequence;
      });
    };

   
    window.addEventListener("keyup", handleKeyUp);

    
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    // Check if the sequence matches the secret code
    if (sequence.join(",") === secretCode.join(",")) {
      setShowDiv(true); 
      setTimeout(() => {
        setShowDiv(false); 
      }, 1000);
    }
  }, [sequence]); 

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div
        className={`${
          showDiv ? "block" : "hidden"
        } w-[40%] h-10 bg-slate-300 flex items-center justify-center p-2 rounded mb-4`}
      >
        <h1 className="w-full h-full text-center">Cheat Code Activated!</h1>
      </div>
      <div className="w-[40%] h-auto bg-green-300 flex items-center justify-center p-2 rounded">
        <p>Sequence: {sequence.join(", ")}</p>
      </div>
    </div>
  );
};

export default App;
