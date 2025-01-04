import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list }) => {
  return (
    <ul className="menu-list-container list-disc pl-5">
      {list && list.length > 0
        ? list.map((listItem) => (
            <MenuItem item={listItem} key={listItem.label} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
