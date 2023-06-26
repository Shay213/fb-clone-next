import React from "react";
import AddPostContextContainer from "./components/AddPostContextContainer";
import AddPostPanel from "./components/AddPostPanel";

const AddPostModal = () => {
  return (
    <AddPostContextContainer>
      <AddPostPanel />
    </AddPostContextContainer>
  );
};

export default AddPostModal;
