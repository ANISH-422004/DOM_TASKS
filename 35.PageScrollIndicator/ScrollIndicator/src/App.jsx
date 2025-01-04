import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const namesWithGar = [
    { name: "Alice", gar: "A" },
    { name: "Bob", gar: "B" },
    { name: "Charlie", gar: "C" },
    { name: "David", gar: "D" },
    { name: "Eva", gar: "E" },
    { name: "Frank", gar: "F" },
    { name: "Grace", gar: "G" },
    { name: "Hannah", gar: "H" },
    { name: "Isaac", gar: "I" },
    { name: "Jack", gar: "J" },
    { name: "Kathy", gar: "K" },
    { name: "Leo", gar: "L" },
    { name: "Mia", gar: "M" },
    { name: "Nina", gar: "N" },
    { name: "Oscar", gar: "O" },
    { name: "Paul", gar: "P" },
    { name: "Quinn", gar: "Q" },
    { name: "Rita", gar: "R" },
    { name: "Sam", gar: "S" },
    { name: "Tina", gar: "T" },
    { name: "Uma", gar: "U" },
    { name: "Vera", gar: "V" },
    { name: "Will", gar: "W" },
    { name: "Xander", gar: "X" },
    { name: "Yara", gar: "Y" },
    { name: "Zane", gar: "Z" },
    { name: "Amelia", gar: "A" },
    { name: "Ben", gar: "B" },
    { name: "Clara", gar: "C" },
    { name: "Dylan", gar: "D" },
    { name: "Ella", gar: "E" },
    { name: "Finn", gar: "F" },
    { name: "Gina", gar: "G" },
    { name: "Harry", gar: "H" },
    { name: "Ivy", gar: "I" },
    { name: "Jake", gar: "J" },
    { name: "Lily", gar: "L" },
    { name: "Mason", gar: "M" },
    { name: "Noah", gar: "N" },
    { name: "Olivia", gar: "O" },
    { name: "Penny", gar: "P" },
    { name: "Quincy", gar: "Q" },
    { name: "Ruby", gar: "R" },
    { name: "Sophie", gar: "S" },
    { name: "Tyler", gar: "T" },
    { name: "Vicky", gar: "V" },
    { name: "Wyatt", gar: "W" },
    { name: "Zoe", gar: "Z" },
    { name: "Adrian", gar: "A" },
    { name: "Brianna", gar: "B" }
  ];

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef(null);

  const handleScrollPercentage = () => {
    const howMuchScrolled = containerRef.current.scrollTop;
    const totalscrollableArea = containerRef.current.scrollHeight - containerRef.current.clientHeight;
    setScrollPercentage((howMuchScrolled / totalscrollableArea) * 100);
  };

//   scrollHeight: This property gives the total height of the content inside the container, including the parts that are not currently visible (i.e., the entire height of the content). It is the total length of the content, whether visible or not. If the content overflows, scrollHeight is greater than clientHeight.

// clientHeight: This property gives the height of the visible area of the container (i.e., the portion that is currently visible to the user). It does not include any part of the content that is outside the viewable area (i.e., scrolled out of view).

//Maths ::
// Example:
// Imagine you have a container with the following properties:

// scrollHeight = 1200px (total content height)
// clientHeight = 800px (visible area)
// If the content overflows, only part of it is visible at any given time. The difference between scrollHeight and clientHeight is the scrollable height. In this case:

// javascript
// Copy code
// const height = 1200px - 800px = 400px;

// This means the content can be scrolled by 400px, and this value is used to calculate how much of the content has been scrolled. It is the total scrollable distance.





  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScrollPercentage); // mount pe lagalo fun on container

    return () => {
      container.removeEventListener('scroll', handleScrollPercentage);
    };
  }, []);

  return (
    <div className='w-full min-h-screen bg-black text-white flex flex-col items-center'>
      <div className='w-full h-2 bg-white' style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
        <div style={{ width: `${scrollPercentage}%`, height: '100%' }}
             className='bg-green-700'
        ></div>
      </div>

      <div
        ref={containerRef}
        className='w-full max-h-[80vh] overflow-y-scroll p-4 mt-8 flex flex-col items-center bg-slate-700'
        style={{ position: 'relative', marginTop: '50px' }}
      >
        {namesWithGar.map((e, index) => (
          <div key={index} className='flex justify-between w-[10rem] p-2 border mt-4'>
            <h1>{e.name}</h1>
            <h1>{e.gar}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
