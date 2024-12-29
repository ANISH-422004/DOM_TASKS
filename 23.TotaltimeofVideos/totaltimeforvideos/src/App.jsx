  import React from "react";

  const App = () => {
    const videos = [
      { id: 1, title: "Video 1", time: "1:10" },
      { id: 2, title: "Video 2", time: "2:14" },
      { id: 3, title: "Video 3", time: "3:44" },
      { id: 4, title: "Video 4", time: "5:05" },
      { id: 5, title: "Video 5", time: "6:03" },
      { id: 6, title: "Video 6", time: "12:39" },
      { id: 7, title: "Video 7", time: "1:56" },
      { id: 8, title: "Video 8", time: "2:10" },
      { id: 9, title: "Video 9", time: "3:14" },
      { id: 10, title: "Video 10", time: "4:05" },
      { id: 11, title: "Video 11", time: "5:03" },
      { id: 12, title: "Video 12", time: "6:39" },
    ];

    return (
      <div className="w-full h-screen bg-slate-200 flex flex-col items-center ">
        <div className="w-[40%] h-[91%] bg-violet-400 flex flex-col items-center gap-5 overflow-y-auto ">
          {videos.map((v) => {
            return (
              <>
                <div className="video w-[90%] h-[20%]  bg-slate-50  rounded shadow-md transition-all hover:scale-105 flex justify-between p-3">
                  <h1>{v.title}</h1>
                  <h3>
                    Duration : <span className="text-gray-400 flex ">{v.time}</span>
                  </h3>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-[40%] h-[5%] bg-slate-500 flex justify-end p-2 text-yellow-50 overflow-y-auto">
              <p>
                Total Duration : {
                  videos.map((v)=>v.time)
                        .map((time)=>{
                            const [hr,sec] = time.split(":").map(Number)
                            return hr*60+sec
                        })
                        .reduce((acc,time)=>(acc+time)) 
                }minutes
              </p>
        </div>
      </div>
    );
  };

  export default App;
