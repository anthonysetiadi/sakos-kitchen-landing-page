import React, { useState } from "react";
import { MenuList } from "../../helpers/Menulist";
import Modal from "../Modal/Modal";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="menu">
      <p>Menu</p>
      <h1 className="menu-title">Popcorn</h1>
      <div className="menu-list">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              modalOpen={setModalOpen}
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      {modalOpen && <Modal openModal={open} closeModal={close} />}
    </div>
  );
}

export default Menu;
