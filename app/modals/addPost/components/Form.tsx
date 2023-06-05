"use client";

import React, { useCallback, useEffect, useState } from "react";
import Author from "./Author";
import Textarea from "./Textarea";
import AddToPost from "./AddToPost";
import Button from "./Button";
import uploadSingleFile from "@/app/actions/uploadSingleFile";
import ImageUpload from "./ImageUpload";

export enum AUDIENCE {
  PUBLIC = "public",
  FRIENDS = "friends",
  ONLY_ME = "only me",
}

const Form = () => {
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState<AUDIENCE>(AUDIENCE.FRIENDS);
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [cloudinaryImage, setCloudinaryImage] = useState("");

  const handleSubmit = useCallback<React.FormEventHandler>(
    async (e) => {
      e.preventDefault();
      if (uploadFile) {
        const res = await uploadSingleFile(uploadFile);
        console.log(res);
      }
    },
    [uploadFile]
  );

  return (
    <form
      className="px-3 pb-3 pt-2 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Author audience={audience} setAudience={setAudience} />
      <Textarea description={description} setDescription={setDescription} />
      {isImageUploadOpen && (
        <ImageUpload
          setUploadFile={setUploadFile}
          uploadFile={uploadFile}
          handleClose={() => setIsImageUploadOpen(false)}
        />
      )}
      <AddToPost setIsImageUploadOpen={setIsImageUploadOpen} />
      <Button disabled={!description.length} />
    </form>
  );
};

export default Form;
