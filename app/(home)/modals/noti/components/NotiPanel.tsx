import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import AllNoti from "./AllNoti";
import UnreadNoti from "./UnreadNoti";
import Wrapper from "./Wrapper";

const NotiPanel = () => {
  return (
    <div
      className="
        bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md shadow-sm border-[1px] 
        border-gray-200 dark:border-none animate-slideInRightToLeft
        flex flex-col gap-3 min-w-[250px]
        "
    >
      <Heading />
      <Wrapper>
        <Content match="all">
          {/* @ts-ignore */}
          <AllNoti />
        </Content>
        <Content match="unread">
          {/* @ts-ignore */}
          <UnreadNoti />
        </Content>
      </Wrapper>
    </div>
  );
};

export default NotiPanel;
