import React from "react";
import { ReactComponent as Chart } from "./chart.svg";
import shoes from "./shoes.png";
import { ReactComponent as Ellipses } from "./Ellipses.svg";

const Index = () => {
  return (
    <div
      className="relative flex justify-center -mt-1 pb-20 text-blue_gray bg-sixth_back w-full font-roboto px-20
    max-sm:justify-start
    max-mdx:overflow-hidden
    "
    >
      <div className="-mt-9 max-sm:-mt-12">
        <div className="relative top-[160px] left-2 fit-none max-sm:-left-8">
          <img
            src={shoes}
            alt="shoes"
            width="300px"
            height="234px"
            className="relative z-20  "
          />
          <div className="absolute top-[270px] left-[165px] z-20">
            <div className="absolute z-40 top-[16px] left-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
              >
                <path d="M6 6L12 0H0L6 6Z" fill="#E2E8F0" />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle
                cx="16"
                cy="16"
                r="14.5"
                fill="#D9F99D"
                stroke="#A3E635"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>

        <div
          className="bg-sixth_text_back z-20 w-[235px]  p-4 relative left-10 top-[160px]  -mt-10 text-[14px] leading-[140%]
        max-sm:left-0 rounded-[5px]
        "
        >
          Emma Simpson collected one pair of <strong>Cool Shoes.</strong>
        </div>
        <div
          className=" w-full relative top-[150px] text-center relative text-amber-50 z-40 ml-auto mr-auto
        max-sm:text-start max-sm:mt-8 
        "
        >
          <div
            className="text-[96px]  font-extrabold leading-[110%]
          max-sm:text-[48px] 
          "
          >
            11,658,467
          </div>
          <div className="text-[56px] font-extrabold leading-[110%] max-sm:text-[32px]">
            Shoes Collected
          </div>
        </div>
        <div className="relative">
          <Chart className="-mt-[250px] max-sm:relative max-sm:-left-12 max-sm:top-12" />
          <div className="absolute top-[69px] left-[210px]">
            <Ellipses className="max-sm:relative max-sm:-left-[58px] max-sm:top-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
