import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface ImageUploadProps {
  uploadFile: File | null;
  setUploadFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleClose?: () => void;
}

const ImageUpload = ({
  setUploadFile,
  uploadFile,
  handleClose,
}: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragEnter = useCallback<React.DragEventHandler>((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback<React.DragEventHandler>((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const getFileExtension = useCallback((filename: string) => {
    return filename.split(".").pop()?.toLowerCase();
  }, []);

  const handleDrop = useCallback<React.DragEventHandler>(
    (e) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      const fileExtension = getFileExtension(file.name);

      if (
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png" ||
        fileExtension === "svg"
      ) {
        setError(null);
        setUploadFile(file);
      } else {
        setError("Invalid file extension. Only jpg,jpeg,png,svg are allowed.");
      }
    },
    [setUploadFile, getFileExtension]
  );

  useEffect(() => {
    return () => {
      if (uploadFile) {
        URL.revokeObjectURL(URL.createObjectURL(uploadFile));
      }
    };
  }, [uploadFile]);

  return (
    <div
      className="
        w-full h-72 p-2 rounded-md border-[1px] 
        border-gray-400 dark:border-zinc-600
        relative
      "
    >
      <div
        className="
          flex justify-center items-center p-1 
          rounded-full cursor-pointer bg-white
          dark:bg-zinc-700 border-[1px] border-gray-300
          dark:border-zinc-300 hover:shadow-lg z-[300]
          absolute top-4 right-4
        "
        onClick={() => {
          setIsDragging(false);
          setUploadFile(null);
          setError(null);
          handleClose?.();
        }}
      >
        <IoMdClose size={25} className="fill-gray-700 dark:fill-zinc-200" />
      </div>
      {uploadFile ? (
        <Image
          src={URL.createObjectURL(uploadFile)}
          alt="selected-file"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-md"
        />
      ) : (
        <>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                const fileExtension = getFileExtension(file.name);

                if (
                  fileExtension === "jpg" ||
                  fileExtension === "jpeg" ||
                  fileExtension === "png" ||
                  fileExtension === "svg"
                ) {
                  setError(null);
                  setUploadFile(file);
                } else {
                  setError(
                    "Invalid file extension. Only jpg,jpeg,png,svg are allowed."
                  );
                }
              }
            }}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="
              w-full h-full bg-slate-100 rounded-md cursor-pointer
              hover:bg-slate-200 transition dark:bg-zinc-700 dark:hover:bg-zinc-600
              flex flex-col group
            "
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col justify-center items-center h-full">
              {isDragging ? (
                <h2 className="text-xl font-semibold uppercase">
                  drop photo here
                </h2>
              ) : (
                <>
                  <div
                    className="
                  flex justify-center items-center p-2 
                  rounded-full cursor-pointer bg-gray-200 
                  group-hover:bg-gray-300 transition
                  dark:bg-zinc-700 dark:group-hover:bg-zinc-600
                "
                  >
                    <AiOutlineCloudUpload
                      size={35}
                      className="fill-gray-700 dark:fill-zinc-200"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">Add Photo</h2>
                    <span className="text-sm">or drag and drop</span>
                    {error && <h2 className="text-lg text-red-500">{error}</h2>}
                  </div>
                </>
              )}
            </div>
          </label>
        </>
      )}
    </div>
  );
};

export default ImageUpload;
