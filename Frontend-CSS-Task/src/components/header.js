import React from "react";
import { useState } from "react";
import Menu from "./menu.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-amber-50 w-full max-sm:p-4 py-6 px-20 flex justify-between items-center text-amber-900 font-roboto  ">
      <div className=" font-bold text-[32px] leading-[110%] ">Collers</div>
      <div className="hidden max-sm:block" onClick={() => setShow(true)}>
        <img src={Menu} alt="menu"></img>
      </div>
      <div className="flex items-center gap-4 max-sm:flex-col max-sm:top-2 max-sm:hidden ">
        <div className="py-3 px-2 text-base	font-medium	">Products</div>
        <div className="py-3 px-2 text-base	font-medium	">Solutions</div>
        <div className="py-3 px-2 text-base	font-medium	">Pricing</div>
        <div className="py-3 px-2 text-base	font-medium	">Resources</div>
        <div className="py-3 px-2 text-base	font-medium	">Log In</div>
        <div className="p-3 text-base border-solid	border-2 border-amber-900 rounded-lg font-medium	">
          Sign up now
        </div>
      </div>

      {show && (
        <div className="flex flex-col bg-amber-50 max-sm:w-[100vw] max-sm:h-[100%] max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:z-40 items-between text-center z-50 fixed top-0 left-0 bottom-0 right-0 hidden max-sm:flex">
          <div className="ml-auto pr-5 pt-5 text-[30px] font-extrabold" onClick={() => setShow(false)}>
            X
          </div>
          <div className="pt-10">
            <div className="py-3  px-2 text-base	font-medium">Products</div>
            <div className="py-3 px-2 text-base	font-medium	">Solutions</div>
            <div className="py-3 px-2 text-base	font-medium	">Pricing</div>
            <div className="py-3 px-2 text-base	font-medium	">Resources</div>
            <div className="py-3 px-2 text-base	font-medium	">Log In</div>
            <div className="p-3 text-base border-solid	border-2 border-amber-900 rounded-lg font-medium
            w-[150px]  ml-auto mr-auto
            ">
              Sign up now
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
