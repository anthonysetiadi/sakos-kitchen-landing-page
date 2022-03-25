import React, { useState } from "react";
import { MenuList } from "../../helpers/Menulist";
import Modal from "../Modal/Modal";
import MenuItem from "../MenuItem";
import "./Menu.css";

function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (id) => {
    setActiveModal(MenuList.at(id));
    setModalOpen(true);
  };
  const close = () => setModalOpen(false);

  const handleNext = () => {
    let nextId = activeModal.id + 1;
    handleOpen(nextId);
  };

  const handlePrev = () => {
    let prevId = activeModal.id - 1;
    handleOpen(prevId);
  };
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
      {modalOpen && (
        <Modal
          activeId={activeModal.id}
          lastId={MenuList.length - 1}
          content={activeModal}
          closeModal={close}
          nextBtn={handleNext}
          prevBtn={handlePrev}
        />
      )}
    </div>
  );
}

export default Menu;
