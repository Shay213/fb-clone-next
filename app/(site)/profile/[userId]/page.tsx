import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import prisma from "@/lib/prisma";

import { BsThreeDots } from "react-icons/bs";
import AddPost from "../../components/addPost/AddPost";

const OPTIONS = [
  "Posts",
  "About",
  "Friends",
  "Photos",
  "Videos",
  "Check-ins",
  "More",
];

const Profile = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    return notFound();
  }

  const activeOption = "posts";

  return (
    <div>
      <div className="bg-white shadow-md w-full h-[70vh] flex justify-center">
        <div className="max-w-7xl w-2/3 h-full">
          <div className="w-full h-2/3 relative rounded-b-md overflow-hidden">
            <Image
              fill
              src={
                user.cover ??
                "https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="cover"
              className="object-cover"
            />
          </div>
          <div className="px-7 h-1/3 flex flex-col justify-between">
            <div className="flex justify-between items-end -translate-y-7">
              <div className="flex items-end gap-2">
                <div className="w-36 h-36 relative rounded-full overflow-hidden">
                  <Image
                    fill
                    src={user.picture ?? "/avatar.jpeg"}
                    alt="your profile image"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">
                    {user.firstName + " " + user.lastName}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {user.friendsIDs.length} friends
                  </p>
                  <div className="flex">
                    <Image
                      src="/avatar.jpeg"
                      alt="friend-avatar"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                    <Image
                      src="/avatar.jpeg"
                      alt="friend-avatar"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                    <Image
                      src="/avatar.jpeg"
                      alt="friend-avatar"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                    <Image
                      src="/avatar.jpeg"
                      alt="friend-avatar"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                    <Image
                      src="/avatar.jpeg"
                      alt="friend-avatar"
                      width={34}
                      height={34}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-base text-white bg-blue-500 rounded-md p-2 hover:bg-blue-600 transition"
                >
                  + Add to story
                </button>
                <button
                  type="button"
                  className="text-base text-gray-800 bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition"
                >
                  Edit profile
                </button>
                <button
                  type="button"
                  className="text-base text-gray-800 bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition"
                >
                  more
                </button>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center text-gray-600 font-medium">
                {OPTIONS.map((option) => (
                  <div
                    key={option}
                    className={`
                        p-3 transition cursor-pointer  border-b-2 
                        ${
                          option.toLowerCase() === activeOption
                            ? "border-blue-500 text-blue-500"
                            : "hover:bg-gray-200 border-white rounded-md"
                        }
                      `}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div
                className="
                  flex justify-center items-center transition cursor-pointer bg-gray-200 hover:bg-gray-300 
                  rounded-md px-3 border-b-2 border-white
                "
              >
                <BsThreeDots size={20} className="fill-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E9EEF0] w-full flex justify-center">
        <div className="max-w-7xl w-2/3 grid grid-cols-2 px-7 py-5 gap-5">
          <div className="flex flex-col gap-5">
            <div className="bg-white dark:bg-zinc-800 rounded-md shadow-lg p-3 flex flex-col gap-2">
              <h2 className="text-2xl">Intro</h2>
              <button
                type="button"
                className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-md"
              >
                Add bio
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-md"
              >
                Edit details
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-md"
              >
                Add hobbies
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-md"
              >
                Add featured
              </button>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-md shadow-lg p-3 flex flex-col gap-2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl">Friends</h2>
                  <span className="text-gray-600">2 friends</span>
                </div>
                <div className="text-blue-500">See all friends</div>
              </div>
              <div>friends</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <AddPost className="mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
