import React from "react";
import MenuContextContainer from "./components/MenuContextContainer";
import MenuPanel from "./components/MenuPanel";

const MenuModal = () => {
  return (
    <MenuContextContainer>
      <MenuPanel />
    </MenuContextContainer>
  );
};

export default MenuModal;
