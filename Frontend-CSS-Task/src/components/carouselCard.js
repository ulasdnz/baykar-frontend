import React from "react";

const CarouselCard = ({ title, Icon, text, image, name, job }) => {
  return (
    <div className="p-8 flex flex-col shrink-0 gap-4 w-[384px] border-solid rounded-[20px] bg-white shadow-carouselCard
    max-sm:h-[296px] max-sm:w-[319px] max-sm:gap-2 max-sm:px-6 max-sm:pt-5
    ">
      <div className="py-4 flex items-center gap-2 text-2xl font-bold">
        <Icon />
        {title}
      </div>
      <div className="text-black leading-[160%] text-2xl max-sm:text-[16px] max-sm:leading-[140%]">{text}</div>
      <div className="flex gap-4 pt-4">
        <div>
          <img src={image} alt="user" className="w-[64px] h-[64px]" />
        </div>
        <div className="flex flex-col">
          <div className="text-black text-[18px] leading-[160%]">{name}</div>
          <div className="text-blue-gray-600 text-[16px] leading-[140%]">
            {job}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
