import React from "react";
import Button from "../../components/button";
import search from "./search.svg";
import arrow from "./arrow.svg";
import shield from "./shield.svg";
import rocket from "./rocket.svg";
import screen from "./screen.svg";
import podcast from "./podcast.svg";
import settings from "./settings.svg";
import svgFirst from "./svgFirst.svg";
import svgSecond from "./svgSecond.svg";
import svgLast from "./svgLast.svg";
import back from "./back.png";
import middle from "./middle.png";
import foot from "./foot.png";
import VideoLarge from "../../components/videoLarge";

const Index = () => {
  return (
    <div className="px-20 pt-20 pb-[228px] bg-fifth_back font-roboto relative
    max-sm:px-4 max-sm:mb-11 max-mdxl:px-6
    ">
      <div className="mb-8 text-blue_gray text-[56px] font-extrabold leading-[110%]
      max-sm:text-[32px] max-sm:font-bold max-sm:text-center
      ">
        Grow your collection
      </div>
      <div className="mb-20 text-blue_gray text-[18px] leading-[160%] 
      max-sm:text-center max-sm:leading-[140%] max-sm:text-[16px] max-sm:mt-8">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </div>

      <div className="flex gap-10 lg:gap-20 shrink-0 bg-fifth_middle
      max-sm:flex-col max-mdxl:gap-0 
      ">
        <div className="flex shrink-0 flex-col gap-4
        max-sm:flex-row max-sm:overflow-scroll
        ">
          <div className="shrink-0">
            <Button
              icon={search}
              text="Bibendum tellus"
              secondIcon={arrow}
              isSelected={true}
            />
          </div>
          <div className="shrink-0">
            <Button icon={shield} text="Cras eget" isSelected={false} />
          </div>
          <div className="shrink-0">
            <Button icon={rocket} text="Dolor pharetra" isSelected={false} />
          </div>
          <div className="shrink-0">
            <Button icon={screen} text="Amet, fringilla" isSelected={false} />
          </div>
          <div className="shrink-0">
            <Button icon={podcast} text="Amet nibh" isSelected={false} />
          </div>
          <div className="shrink-0">
            <Button icon={settings} text="Sed velit" isSelected={false} />
          </div>
        </div>

        <div className="relative w-[800px] max-mdxl:w-[65%] max-sm:mt-6">
          <div>
            <VideoLarge VideoPicture={back} />
            <div className=" relative top-[100px] left-[100px]
            max-sm:left-[40px] max-sm:top-[55px]
            ">
              <VideoLarge VideoPicture={middle} />
            </div>
          </div>
          <img
            src={foot}
            alt="foot"
            className="absolute -bottom-[120px] -right-[160px] z-30 max-mdxl:right-0 max-mdxl:h-[216px] max-mdxl:w-[196px] w-[319px] h-[356px]
            max-sm:w-[114px] max-sm:h-[125px] max-sm:right-auto max-sm:left-[65vw] max-sm:-bottom-[240px]            "
          
          />
        </div>
      </div>
      <div className="w-full absolute h-[auto] -bottom-0 left-0 max-sm:-bottom-6 ">
    <img src={svgFirst} alt="svgFirst" className=" z-10 w-full" />
      </div>
      <div className="w-full absolute h-[auto] -bottom-0 left-0 max-sm:-bottom-8">
    <img src={svgSecond} alt="svgFirst" className=" z-10 w-full" />
      </div>
      <div className="w-full absolute h-[auto] -bottom-0 left-0 max-sm:-bottom-12">
    <img src={svgLast} alt="svgFirst" className=" z-10 w-full" />
      </div>
    </div>
  );
};

export default Index;
