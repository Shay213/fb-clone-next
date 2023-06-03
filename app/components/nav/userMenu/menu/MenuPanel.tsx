import React from "react";
import Search from "./Search";
import { CREATE_SECTION_ITEMS, MENU_PANEL_ITEMS } from "./data";
import Section from "./Section";

interface MenuPanelProps {
  isOpen: boolean;
}

const MenuPanel = ({ isOpen }: MenuPanelProps) => {
  return (
    <div
      className={`absolute top-[60px] right-0 bg-slate-50 
          ${isOpen ? "visible translate-x-0" : "translate-x-full invisible"}
          py-4 px-5 rounded-md shadow-md transition duration-100 ease-in        
        `}
    >
      <div className="mb-2">
        <h1 className="text-xl font-semibold">Menu</h1>
      </div>
      <div className="flex gap-4 overflow-hidden max-h-[calc(100vh-160px)] shadow-md rounded-md">
        <div className="p-3 bg-white max-h-full overflow-auto scrollbar">
          <div className="flex flex-col max-w-[250px]">
            <Search />
            {Object.entries(MENU_PANEL_ITEMS).map(([key, val], i, arr) => (
              <>
                <Section label={key} items={val.items} key={key} />
                {i < arr.length && <hr className="border-gray-300 my-3" />}
              </>
            ))}
          </div>
        </div>
        <div className="p-3 bg-white shadow-md rounded-md">
          <div className="flex flex-col max-w-[140px]">
            <h2 className="mb-4">Create</h2>
            <div className="flex flex-col gap-3">
              {CREATE_SECTION_ITEMS.map(({ icon: Icon, name }, i) => (
                <div key={name}>
                  <div
                    className="flex items-center gap-3 rounded-md
                      hover:bg-gray-200 transition cursor-pointer p
                    "
                  >
                    <div
                      className="
                      flex items-center justify-center bg-gray-200 p-2 
                      cursor-pointer rounded-full
                    "
                    >
                      <Icon size={16} className="fill-gray-800" />
                    </div>
                    <div className="text-gray-800 text-sm first-letter:uppercase">
                      {name}
                    </div>
                  </div>
                  {i === 3 && <hr className="border-gray-300 mt-5 mb-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPanel;
