const uploadSingleFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  if (!process.env.NEXT_PUBLIC_UPLOAD_PRESET) {
    throw new Error("Upload preset not specified!");
  }
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        body: formData,
        method: "POST",
      }
    );
    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default uploadSingleFile;
