import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {MenuList.map((item, index) => (
          <MenuItem
            name={item.name}
            image={item.image}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
