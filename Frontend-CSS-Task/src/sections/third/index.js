import React from "react";
import { ReactComponent as TickSvg } from "./check.svg";
import Video from "../../components/video";

const Third = () => {
  return (
    <div
      className="py-40 px-20 bg-light_amb font-roboto flex items-center justify-center 
    max-sm:px-4 max-sm:pt-4 max-sm:pb-[56px] max-sm:mb-[150px] max-sm:bg-white
    "
    >
      <div
        className="p-20 max-w-[1280px] pb-[120px] bg-white flex justify-between  rounded-[30px] shadow-third
      max-sm:flex-col max-sm:w-[100%] max-sm:px-4 max-sm:py-8 max-sm:pb-[80px]  max-mdxl:pr-1 max-mdxl:pl-4
      "
      >
        <div className="flex flex-col gap-6 shrink-0  ">
          <div className="text-blue_gray text-[56px] font-extrabold max-sm:text-[32px] max-sm:font-bold max-sm:text-center
          max-mdx:text-[32px]
          ">
            Why join us
          </div>
          <div>
            <div className="flex leading-[180%] max-sm:mb-2 max-sm:leading-[140%] max-sm:text-[16px] text-xl font-normal
            max-mdx:text-[16px]
            ">
              <TickSvg className="mr-2 mt-1.5 max-sm:-mt-5  w-[30px] h-auto" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </div>
            <div className="flex leading-[180%] max-sm:mb-2 text-xl font-normal max-sm:leading-[140%] max-sm:text-[16px] max-mdx:text-[16px]">
              <TickSvg className="mr-2  mt-1.5 max-sm:-mt-5 w-[30px] h-auto" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </div>
            <div className="flex leading-[180%] text-xl font-normal max-sm:leading-[140%] max-sm:text-[16px] max-mdx:text-[16px]">
              <TickSvg className="mr-2 mt-1.5 max-sm:-mt-5 w-[30px] h-auto" />
              Ullamcorper ornare in et egestas dolor orci.
            </div>
          </div>
          <div className="flex items-start max-sm:items-center max-sm:justify-center max-sm:z-20">
            <div
              className="py-4 px-8 text-center text-amber-900 text-xl border-2 border-solid border-amber-900 rounded-[8px]
              font-medium
            "
            >
              Sign up now
            </div>
          </div>
        </div>

        <div
          className="relative ml-0  min-[1300px]:ml-[80px] min-[1400px]:ml-[120px]
        max-sm:mt-[35px]  max-mdx:-ml-[100px]
        "
        >
          <div className="flex relative h-full items-center justify-start ">
            <div
              className=" absolute -top-[95px] right-[70px] z-10 w-[59px] h-[60px] rounded-[50px] opacity-75 bg-blue_light
            max-sm:w-[36px] max-sm:h-[37px] max-sm:right-[35px] max-sm:-top-[48px]
            "
            ></div>
            <div
              className="hidden max-sm:block absolute z-10  rounded-[50px] opacity-75
            max-sm:w-[55px] max-sm:h-[55px]  max-sm:-left-[25px] max-sm:top-[20px] bg-brown_buble
            "
            ></div>
            <div
              className=" mt-10 w-[666px] h-[217px] -ml-[100px] items-center justify-center -rotate-45	bg-amber-200
            max-sm:w-[411px] max-sm:h-[134px]  max-sm:mt-[50px] max-sm:relative max-sm:left-7
            "
            ></div>
          </div>
          <Video />
          <div className="w-[74px] h-[74px] -z-1 opacity-75 rounded-[30px] bg-fuchsia-700 absolute right-[120px] -bottom-[85px]
          max-sm:w-[45px] max-sm:h-[45px] max-sm:right-[65px] max-sm:-bottom-[70px]
          max-mdx:bottom-[20px]
          " />
          <div className=" absolute -right-[48px] -bottom-[150px] w-[210px] max-mdxl:w-[150px] max-mdxl:h-[150px] max-mdxl:right-[15px] h-[218px] rounded-[50px] bg-pink-700 opacity-75
          max-sm:w-[134px] max-sm:h-[134px] max-sm:-bottom-[109px] max-sm:-right-[42px]
          max-mdx:bottom-[10px]
          " />
        </div>
      </div>
    </div>
  );
};

export default Third;
