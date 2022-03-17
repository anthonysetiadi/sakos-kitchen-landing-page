import React, { useState } from "react";
import { MenuList } from "../../helpers/Menulist";
import Modal from "../Modal/Modal";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <p>Menu</p>
      <h1 className="menu-title">Popcorn</h1>
      <div className="menu-list">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              onClick={() => {
                props.setModalOpen(true);
              }}
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
