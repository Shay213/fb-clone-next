import React from "react";

const ReelsAndStories = () => {
  return (
    <div className="bg-white rounded-md shadow-lg">
      <div className="border-b-[1px] border-gray-300 flex">
        <div className="flex-1 py-1 ml-6 border-b-2 border-blue-500">
          <div
            className="
              py-4 flex items-center justify-center 
              hover:bg-gray-200 transition cursor-pointer
              rounded-md
            "
          >
            Stories
          </div>
        </div>
        <div className="flex-1 py-1 mr-6">
          <div
            className="
              py-4 flex items-center justify-center
              hover:bg-gray-200 transition cursor-pointer
              rounded-md
            "
          >
            Reels
          </div>
        </div>
      </div>
      <div className="py-6 pl-6">
        <div className="overflow-hidden">
          <div className="flex gap-2">
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
            <div className="h-[200px] basis-[120px] flex-shrink-0 flex-grow-0 border-2">
              card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsAndStories;
