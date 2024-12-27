import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

    const [blurval, setblurval] = useState(25)
    const imageRef = useRef(null)
    console.log(blurval);
    

    useEffect(()=>{
        // console.log(imageRef.current.style.filter );
        imageRef.current.style.filter = `blur(${blurval}px)`



    },[blurval])




  return (
    <div className='main h-screen w-full bg-slate-300  flex flex-col justify-center items-center'>
        <label htmlFor="range">Blurvalue:{blurval}</label>
        <input type="range" min={0} max={25}   onChange={(e)=>{
          setblurval(e.target.value);
           
        }}/>


        <div className='imagecontainer w-[80%] h-[80%]   flex justify-center items-center '>
                <img  ref={imageRef} className='' src="https://images.unsplash.com/photo-1734375181552-cfa83d404033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
                
        </div>
    </div>
  )
}

export default App