import React from "react";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        src="/avatar.png"
        alt="avatar"
        width={609}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
