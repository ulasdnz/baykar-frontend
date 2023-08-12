import React from "react";
import VideoPicture from "./Video.png";
import { ReactComponent as RoundSvg } from "./roundSvg.svg";

const Video = () => {
  return (
    <div className="absolute shadow-video z-30 h-[350px] w-[520px] top-0 right-[50px] bg-white border-5 rounded-[20px]
    max-sm:w-[329px] max-sm:h-[234px] max-sm:right-[0px] max-sm:-top-[5px] max-sm:border-5
    max-mdx:w-2/3 max-mdx:h-[87%]
    ">
      <div className="pt-5 pb-1 pl-1 mx-4 h-[10px] flex gap-[5px] items-center">
        <RoundSvg className="text-rose-600	" />
        <RoundSvg className="text-amber-400" />
        <RoundSvg className="text-green-500" />
      </div>
      <div className="px-1.5 ">
        <img className="rounded-[20px] pt-1" src={VideoPicture} alt="video" />
      </div>
      <div className=" absolute left-[70px] -bottom-10 rounded-[50px] w-[85px] h-[86px] opacity-75	 bg-green-700
      max-sm:w-[49px] max-sm:h-[50px] max-sm:left-[40px] max-sm:-bottom-4
      " />
    </div>
  );
};

export default Video;
