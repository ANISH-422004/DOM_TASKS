import React, { useState } from "react";

const App = () => {
  const data = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/236x/86/f1/6a/86f16a24778b909f8207e0f071249915.jpg",
      l1: "Hey",
      l2: "Let's",
      l3: "Dance",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/236x/07/af/d3/07afd3a4f0beddf993656e09dbbf4d9f.jpg",
      l1: "Lets",
      l2: "Make",
      l3: "Time",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/474x/9f/ad/40/9fad4066dcc33b57764f9c55a2ee09af.jpg",
      l1: "Experience",
      l2: "It",
      l3: "today",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/236x/0a/f3/ea/0af3eaba803086157e9db68aa5136dd7.jpg",
      l1: "Make",
      l2: "Hard",
      l3: "Desicions",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/474x/82/6d/01/826d015853479f9fccc9a14222da4e69.jpg",
      l1: "it's Your",
      l2: "Epic",
      l3: "Moment",
    },
  ];

  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (id) => {
    setActivePanel(activePanel === id ? null : id);
  };

  return (
    <div className="w-full h-screen bg-red-100 flex justify-center items-center text-yellow-50">
      <div className="panels flex w-[80%] h-[90%] bg-slate-200">
        {data.map((panel) => (
          <div
            key={panel.id}
            className={`panel flex-1 transition-all duration-500 ease-in-out ${activePanel === panel.id ? 'open-active' : 'open'}`}
            style={{
              backgroundImage: `url(${panel.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => togglePanel(panel.id)}
          >
            <h1>{panel.l1}</h1>
            <h1>{panel.l2}</h1>
            <h1>{panel.l3}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

