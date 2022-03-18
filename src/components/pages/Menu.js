import React, { useState } from "react";
import { MenuList } from "../../helpers/Menulist";
import Modal from "../Modal/Modal";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (arrayId) => {
    setActiveModal(MenuList[arrayId]);
    setModalOpen(true);
  };
  const close = () => setModalOpen(false);

  return (
    <div className="menu">
      <p>Menu</p>
      <h1 className="menu-title">Popcorn</h1>
      <div className="menu-list">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              openModal={() => handleOpen(key)}
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      {modalOpen && <Modal content={activeModal} closeModal={close} />}
    </div>
  );
}

export default Menu;
