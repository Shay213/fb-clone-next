import React from "react";

const Logo = ({ showSubText }: { showSubText?: boolean }) => {
  return (
    <div>
      <div className="text-5xl mb-4 text-blue-600 font-bold">coolname</div>
      {showSubText && (
        <p className="text-lg">
          Connect with friends and the world
          <br /> around you on Facebook.
        </p>
      )}
    </div>
  );
};

export default Logo;
