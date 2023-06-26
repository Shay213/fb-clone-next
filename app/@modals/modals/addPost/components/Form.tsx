"use client";

import React, { useCallback, useState } from "react";
import Author from "./Author";
import Textarea from "./Textarea";
import AddToPost from "./AddToPost";
import Button from "./Button";
import uploadSingleFile from "@/app/actions/uploadSingleFile";
import ImageUpload from "./ImageUpload";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import Loader from "@/app/components/Loader";
import { useRouter } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const modalsContext = useModalsContext();
  const router = useRouter();

  const onSuccess = useCallback(() => {
    if (modalsContext?.addPost) modalsContext.addPost.disabledHide = false;
    setDescription("");
    setAudience(AUDIENCE.FRIENDS);
    setIsImageUploadOpen(false);
    setUploadFile(null);
    modalsContext?.addPost.hide();
    router.refresh();
    toast.success("Post added successfully.");
  }, [modalsContext?.addPost, router]);

  const handleSubmit = useCallback<React.FormEventHandler>(
    async (e) => {
      e.preventDefault();
      if (modalsContext?.addPost) {
        modalsContext.addPost.disabledHide = true;
      }
      setIsLoading(true);

      if (!session?.user?.email) {
        toast.error("Please login to add new post.");
        if (modalsContext?.addPost) modalsContext.addPost.disabledHide = false;
        return;
      }

      let body = {
        description,
        audience,
        email: session.user.email,
      } as any;

      if (uploadFile) {
        const res = await uploadSingleFile(uploadFile);
        // null or url
        if (!res) {
          toast.error("There was a problem while uploading your file.");
          return;
        }
        body = { ...body, img: res };
      }

      try {
        //await addPost(body);
        onSuccess();
      } catch (error) {
        if (modalsContext?.addPost) modalsContext.addPost.disabledHide = false;
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [
      uploadFile,
      audience,
      description,
      session?.user?.email,
      onSuccess,
      modalsContext?.addPost,
    ]
  );

  return (
    <>
      {isLoading ? (
        <div className="min-h-[200px] flex flex-col items-center justify-center py-4">
          <Loader />
          <p>We are adding your post...</p>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Form;
