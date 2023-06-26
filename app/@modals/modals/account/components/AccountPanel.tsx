import React from "react";
import Profiles from "./Profiles";
import Options from "./Options";

const AccountPanel = () => {
  return (
    <div className="fixed top-[62px] right-0 bg-transparent overflow-hidden p-2 z-50">
      <div
        className={`
          bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md 
            shadow-sm border-[1px] border-gray-200 dark:border-none
            animate-slideInRightToLeft flex flex-col gap-5
        `}
      >
        <Profiles />
        <Options />
      </div>
    </div>
  );
};

export default AccountPanel;
