import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
export async function generateStaticParams() {
  const users = await prisma.user.findMany();

  return users.map((user) => ({
    userId: user.id,
  }));
}

const Profile = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    return notFound();
  }

  return (
    <div>
      <div className="bg-white shadow-md w-full h-[70vh] flex justify-center">
        <div className="max-w-7xl">
          <div className="w-full h-2/3 relative">
            <Image fill src={user.cover ?? ""} alt="cover" />
          </div>
          <div className="px-3">
            <div className="flex justify-between">
              <div className="flex items-end gap-2">
                <div className="w-10 h-10 relative">
                  <Image
                    fill
                    src={user.picture ?? ""}
                    alt="your profile image"
                  />
                </div>
                <div>
                  <h1>{user.firstName + " " + user.lastName}</h1>
                  <p>{user.friendsIDs.length} friends</p>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
