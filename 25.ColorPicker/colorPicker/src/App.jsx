import React, { useState, useRef, useEffect } from "react";

const App = () => {
 
  const [colorHexCode, setColorHexCode] = useState("#ffffff"); 
  const colorRef = useRef(null);
  const mainRef = useRef(null);



  return (
    <div
      id="main"
      ref={mainRef}
      style={{ backgroundColor: colorHexCode }}
      className="h-screen w-full flex justify-center items-center"
    >

      <div className="flex flex-col items-center gap-4">
                            
                              <h1 className="text-2xl font-bold text-gray-800">
                                Background Color karlo guyzz
                              </h1>
                            
                              <input
                                hidden
                                type="color"
                                ref={colorRef}
                                defaultValue="#ffffff"
                                onChange={()=>{
                                  const selectedColor = colorRef.current.value;
                                  setColorHexCode(selectedColor); 
                                  // console.log(mainRef.current.style.backgroundColor);
                                }} 
                              />
                              
                              <button
                                className="p-2 border border-violet-500  rounded text-violet-400"
                                onClick={() => {

                                  colorRef.current.click()  // all ref gets this .click() method :)
                                
                                }}

                              >
                                Change Background Color
                              </button>
      </div>
    </div>
  );
};

export default App;
