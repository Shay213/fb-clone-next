import React from "react";
import Search from "./Search";
import { CREATE_SECTION_ITEMS, MENU_PANEL_ITEMS } from "../data";
import Section from "./Section";

const MenuPanel = () => {
  return (
    <div
      className="
        absolute top-0 right-0 bg-transparent overflow-hidden p-2 z-50
      "
    >
      <div
        className={`
          bg-slate-50 dark:bg-zinc-700 py-4 px-5 rounded-md 
            shadow-sm border-[1px] border-gray-200 dark:border-none
            animate-slideInRightToLeft
        `}
      >
        <div className="mb-2">
          <h1 className="text-xl font-semibold dark:text-zinc-200">Menu</h1>
        </div>
        <div className="flex gap-4 overflow-hidden max-h-[calc(100vh-160px)] shadow-md rounded-md">
          <div
            className="
              p-3 bg-white dark:bg-zinc-800 max-h-full overflow-auto
              scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-100
              dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
            "
          >
            <div className="flex flex-col max-w-[250px]">
              <Search />
              {Object.entries(MENU_PANEL_ITEMS).map(([key, val], i, arr) => (
                <div key={key}>
                  <Section label={key} items={val.items} />
                  {i < arr.length - 1 && (
                    <hr className="border-gray-300 my-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 bg-white dark:bg-zinc-800 shadow-md rounded-md">
            <div className="flex flex-col max-w-[140px]">
              <h2 className="mb-4 dark:text-zinc-200">Create</h2>
              <div className="flex flex-col gap-3">
                {CREATE_SECTION_ITEMS.map(({ icon: Icon, name }, i) => (
                  <div key={name}>
                    <div
                      className="flex items-center gap-3 rounded-md
                      hover:bg-gray-200 dark:hover:bg-zinc-700 transition cursor-pointer p
                    "
                    >
                      <div
                        className="
                      flex items-center justify-center bg-gray-200 dark:bg-zinc-700  
                      cursor-pointer rounded-full p-2
                    "
                      >
                        <Icon
                          size={16}
                          className="fill-gray-800 dark:fill-zinc-200"
                        />
                      </div>
                      <div className="text-gray-800 dark:text-zinc-200 text-sm first-letter:uppercase">
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
    </div>
  );
};

export default MenuPanel;
