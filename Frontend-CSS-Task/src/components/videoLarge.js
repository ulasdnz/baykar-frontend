import React from "react";
import { ReactComponent as RoundSvg } from "./roundSvg.svg";

const Video = ({ VideoPicture }) => {
  return (
    <div className="absolute shadow-video z-30  max-mdxl:h-[auto] h-[451px]  max-mdxl:w-[70%] w-[759px] top-0 right-[50px] bg-white border-5 rounded-[20px]
     max-sm:h-[200px] max-sm:right-auto max-sm:left-auto max-sm:w-[294px] max-mdxl:pb-2
    ">
      <div className="pt-5 pl-1 mx-4 h-[10px] flex gap-[5px] items-center max-sm:pt-5">
        <RoundSvg className="text-rose-600	" />
        <RoundSvg className="text-amber-400" />
        <RoundSvg className="text-green-500" />
      </div>
      <div className="px-1.5 ">
        <img className="rounded-[20px] pt-1 max-mdxl:h-[auto]  max-sm:h-[167px] max-sm:mt-2 max-sm:rounded-t-[0]" src={VideoPicture} alt="video" />
      </div>
    </div>
  );
};

export default Video;
