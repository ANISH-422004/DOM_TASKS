import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  const toggleChildren = () => {
    setDisplayCurrentChildren(!displayCurrentChildren);
  };

  return (
    <li>
      <div className="flex items-center gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span 
            onClick={toggleChildren} 
            className="cursor-pointer select-none"
          >
            {displayCurrentChildren ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {displayCurrentChildren && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;


// How useState works in multiple <li> elements:
// When you use useState inside a React functional component like MenuItem, each instance of the MenuItem component gets its own independent state.

// Detailed Explanation:
// Component Instantiation: Every time you render a new <MenuItem> (for each item in your menu list), React creates a new instance of the MenuItem component. This means that the useState hook is called separately for each instance.

// Separate State for Each Instance: Since each instance calls useState independently, React keeps a separate copy of the state (displayCurrentChildren) for each component instance. Therefore, when you click the toggle button (+ / -), it only updates the state of that specific MenuItem component without affecting others.

// Rendering Logic:

// When toggleChildren is called, it toggles the displayCurrentChildren state for that particular instance of MenuItem.
// React re-renders only that specific MenuItem component where the state was updated.
// Other MenuItem components remain unaffected because they have their own independent state.