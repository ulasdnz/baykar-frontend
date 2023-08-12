import React from "react";
import ShopCard from "../../components/shopCard";
import Shop1 from "./shop1.png";
import Shop2 from "./shop2.png";
import Shop3 from "./shop3.png";

const Second = () => {
  return (
    <div className="p-20 font-roboto bg-blue_gray text-white max-sm:py-12 max-sm:px-4">
      <div className="flex flex-col gap-20">
        <div className="flex gap-20 w-full max-sm:flex-col max-sm:gap-8 max-sm:items-center">
          <div className="text-[56px] font-extrabold w-full max-sm:text-center max-sm:font-bold max-sm:text-[32px]">
            The best of the best
          </div>
          <div className="flex items-center justify-center px-6 py-5 text-center inline w-[233px] h-[64px] border-solid border-2 rounded-[8px] text-2xl text-center">
            Sign up now
          </div>
        </div>
        <div className="flex gap-12 justify-between relative max-sm:gap-8 max-sm:flex-col max-sm:items-center">
          <ShopCard image={Shop1} />
          <div
            className="absolute bg-pink-700 w-[271px] h-[271px] -left-8 bottom-6 opacity-[.75] rounded-[50px]
            max-sm:w-[202px] max-sm:h-[202px] max-sm:top-[293px] max-sm:left-6"
            style={{ zIndex: "0" }}
          ></div>
          <ShopCard className="flex shrink" image={Shop2}>
            <div
              className="absolute  -z-10 bg-blue_light w-[161px] h-[161px] opacity-[.75] rounded-[50px] -left-5 -top-[30px]
            max-sm:w-[120px] max-sm:h-[120px] max-sm:left-auto max-sm:top-[130px]   max-sm:-right-4 "
            ></div>
            <div className="absolute max-sm:hidden -z-10 bg-amber-700 w-[130px] h-[130px] -right-3.5 bottom-[60px]  opacity-[.75] rounded-[30px]"></div>
          </ShopCard>

          <ShopCard image={Shop3}>
            <div className="absolute max-sm:hidden -z-10 bg-green-700 w-[232px] h-[232px] -right-9 top-5 opacity-[.75] rounded-[50px]"></div>
            <div
              className="absolute -z-10 bg-fuchsia-700 w-[202px] h-[202px] left-[80px] -bottom-6  opacity-[.75] rounded-[50px]
            max-sm:-left-3 max-sm:top-7 max-sm:w-[150px] max-sm:h-[150px] max-sm:rounded-[30px] max-sm:rotate-90
            "
            ></div>
          </ShopCard>
        </div>
      </div>
    </div>
  );
};

export default Second;
