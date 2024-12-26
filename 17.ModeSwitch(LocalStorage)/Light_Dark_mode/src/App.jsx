import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {

  // localStorage.setItem("theme","light") // inita set up 
  const [theme, settheme] = useState(localStorage.getItem("theme")) // theme will change on clicking on userclick so intution says make it a usestate
  // console.log(theme);
  const maindivRef = useRef()

  const themeChange = ()=>{
    if(theme === "light"){
      console.log("l");
      settheme("dark")
      localStorage.setItem('theme','dark')
      
      
    }else{
      console.log("d");
      settheme("light")
      localStorage.setItem('theme','light')
      
    }
  }

  useEffect(()=>{
    maindivRef.current.setAttribute('id',theme)
    
  },[theme])



  return (
    <div ref={maindivRef} className="w-full h-screen">
      <nav className="h-[10%] w-full flex justify-between px-5 items-center text-xl font-medium">
        <div>
          <h1 className="text-2xl font-mono ">Ramoko</h1>
        </div>
        <div className="flex gap-8">
          <h4>Contact</h4>
          <h4>Products</h4>
          <h4>Catalog</h4>
          <h4 className="border border-[#07f1a3] px-2 rounded"  onClick={themeChange}>Mode</h4>
        </div>
      </nav>
      <div className="flex h-[90%] justify-center items-center">
        <h1 className="text-9xl  ">DUMMY WEBSITE</h1>
      </div>
    </div>
  );
};

export default App;
