import React from "react";
import { ReactComponent as AppStore } from "./AppStore.svg";
import { ReactComponent as Playstore } from "./asd.svg";
import { ReactComponent as Youtube } from "./youtube.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";

const Index = () => {
  return (
    <footer className="px-20 font-roboto bg-blue_gray ">
      <div className="py-12 w-full flex gap-12  justify-between border-t-[1px] border-b-[1px] border-blue_gray_700 border-solid
      max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center
      ">
        <div className="flex flex-col w-full">
          <div className="py-3 text-[16px] text-white leading-[110%] font-medium">
            Product
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Pricing
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Overview
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Browse
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Accessibility
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Five
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="py-3 text-[16px] text-white leading-[110%] font-medium">
            Solutions
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Brainstorming
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Ideation
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Wireframing
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Research
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Design
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="py-3 text-[16px] text-white leading-[110%] font-medium">
            Support
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Contact Us
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Developers
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Documentation
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Integrations
          </div>
          <div className="py-3 text-[16px] text-blue_gray_200 leading-[140%]">
            Reports
          </div>
        </div>

        <div className="flex flex-col w-full max-sm:items-center">
          <div className="py-3 text-[16px] text-white leading-[110%] font-medium">
            Get the App
          </div>
          <div className="pt-2">
            <AppStore />
          </div>
          <div className="py-3">
            <Playstore />
          </div>
          <div className="pt-12 pb-3 text-[16px] text-blue_gray_200 leading-[110%] font-medium">
            Follow Us
          </div>

          <div className="flex gap-4">
            <div>
              <Youtube />
            </div>
            <div>
              <Facebook />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <Linkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <span className="text-[16px] text-blue_gray_200 leading-[140%]">
          Collers @ 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Index;
