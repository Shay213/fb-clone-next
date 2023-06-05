import React from "react";
import Heading from "./Heading";
import Form from "./Form";

const AddPostPanel = () => {
  return (
    <div
      className="
        absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 z-[200]
      "
    >
      <div
        className="
          flex flex-col bg-slate-50 dark:bg-zinc-800 
          rounded-md shadow-xl w-[500px]
        "
      >
        <Heading />
        <Form />
      </div>
    </div>
  );
};

export default AddPostPanel;
