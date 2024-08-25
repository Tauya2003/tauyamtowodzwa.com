import React from "react";

const Bulb = () => {
  return (
    <div className="absolute -left-36 xl:-left-20 -bottom-12 rotate-12 xl:rotate-90 animate-pulse duration-75 z-10 w-[250px] xl:w-[360px]">
      <img
        src="/bulb.png"
        width={360}
        height={300}
        alt="bulb"
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
