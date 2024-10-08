import React from "react";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 opacity-20 animate-pulse duration-75 z-10">
      <img
        src="/circle.png"
        alt="circle"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
