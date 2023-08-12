import React from "react";

const Button = ({ icon, text, secondIcon, isSelected }) => {
  const sty = isSelected
    ? "p-4 text-blue_gray flex bg-white rounded-lg shadow-buttonShadow"
    : "p-4 text-blue_gray flex bg-white rounded-lg";

  return (
    <div className={sty}>
      <div>
        <img src={icon} alt="first icon" className="w-6 h-6" />
      </div>
      <div className="px-4 font-medium max-sm:shirink-0	text-xl leading-[24px] tracking-[0.5px]">{text}</div>
      {secondIcon && (
        <div>
          <img src={secondIcon} alt="second icon" className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default Button;
