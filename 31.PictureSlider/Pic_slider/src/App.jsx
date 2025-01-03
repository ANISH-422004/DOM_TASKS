import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [imageidx, setImageidx] = useState(0); // Start index at 0

  const images = [  
    {
      src: "https://i.pinimg.com/236x/71/08/b0/7108b082998514abde2aca39ba1f91ea.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/fe/fb/bb/fefbbb98bf64fbf456d65ebeff6820b9.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/e5/a2/92/e5a292e312619af8c03ed226928d949b.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/b2/c9/e3/b2c9e3d47d21cee0fcba47d1e54253b1.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/fe/fb/bb/fefbbb98bf64fbf456d65ebeff6820b9.jpg",
    },
    {
      src: "https://i.pinimg.com/236x/b2/c9/e3/b2c9e3d47d21cee0fcba47d1e54253b1.jpg",
    },
  ];

  const handleBackward = () => {
    if (imageidx > 0) {
      setImageidx((prev) => prev - 1);
    } else {
      setImageidx(images.length - 1);
    }
  };

  const handleForward = () => {
    if (imageidx < images.length - 1) {
      setImageidx((prev) => prev + 1);
    } else {
      setImageidx(0);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center ">
      <div className=" text-center">
        <h1>current IDX : {imageidx}</h1>
      </div>

      <div className="flex justify-center items-center relative">
        <i
          onClick={handleBackward}
          className="ri-arrow-left-circle-fill text-4xl cursor-pointer mx-4"
        ></i>
        <div className="w-64 aspect-video bg-red-100 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={images[imageidx].src}
          />
        </div>
        <i
          onClick={handleForward}
          className="ri-arrow-right-circle-fill text-4xl cursor-pointer mx-4"
        ></i>
        <div className="absolute top-[90%]">

            <div className="flex gap-1 "> 
              {
                images.map((_,id)=>{
                  return (
                     <div 
                      onClick={()=>{setImageidx(id)}}
                     className={`w-2 aspect-square ${id == imageidx ? "active" : "inactive" } rounded-full `}>

                     </div>
                  )
                })
              }
            </div>

        </div>

      </div>
    </div>
  );
};

export default App;
