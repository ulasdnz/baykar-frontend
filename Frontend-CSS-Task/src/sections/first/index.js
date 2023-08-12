import React from "react";
import Pexels from "./Pexels.png";
import Trophy from "./trophy.svg";
import Tunnel from "./tunnel.svg";
import Tv from "./tv.svg";

const Index = () => {
  return (
    <section className="bg-amber-50 ">
      <div
        className="absolute right-0 max-sm:top-[535px] max-mds:top-[295px] max-mdx:top-[269px] top-[242px]  
         lgm:top-[215px] xxl:top-[200px] xxlm:top-[219px] xxlb:top-[200px] lgs:top-[240px]"
        style={{ zIndex: "0" }}
      >
        <div
          className="w-0 h-0 border-solid border-t-0	border-r-0 border-b-[812px] border-l-[100vw]	
          max-sm:border-b-[356px] max-sm:border-l-[100vw] max-sm:border-r-0 max-sm:border-t-0
          "
          style={{
            borderColor: "transparent transparent #FEF3C7 transparent",
          }}
        />
      </div>
      <div className=" w-full h-[583px] p-20  font-roboto max-sm:px-4 max-sm:py-12">
        <div className="flex items-center justify-center gap-20 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-8 relative">
            <div className="w-full text-blue_gray text-7xl max-sm:text-[56px] max-sm:text-center max-sm:font-extrabold	">
              Collectible Sneakers
            </div>
            <div className="text-[18px] font-normal max-sm:text-center max-sm:leading-[160%]	">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </div>
            <div className="flex gap-4 max-sm:justify-center">
              <div className="text-xl text-center w-[179px] max-sm:w-auto p-4 text-base border-solid border-2 border-amber-900 rounded-lg font-medium	">
                Sign up now
              </div>
              <div className=" flex items-center gap-2 w-[179px] max-sm:w-auto py-3 px-2 text-base  font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z"
                    fill="#78350F"
                  />
                </svg>
                Watch Demo
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
              <img
                src={Pexels}
                alt="pexels"
                className="min-w-[486px] max-sm:min-w-[100%] h-[388px] block object-contain relative"
                style={{ zIndex: "1" }}
              />
              <div
                className="w-[367px] h-[372px]  max-sm:w-[75%] max-sm:h-[74%] max-sm:right-auto 
                max-sm:left-auto  bg-amber-400 absolute top-14 max-sm:top-20 rounded-[50px] right-[65px]"
                style={{ zIndex: "0" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex  mr-auto ml-auto gap-20 p-20  font-roboto relative
        max-sm:flex-col max-sm:py-12 max-sm:px-4 max-sm:gap-8 max-sm:items-center max-sm:justify-center
        max-sm:mt-[241px] max-sm:bg-amber-100 
        "
        style={{ zIndex: "2" }}
      >
        <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center ">
          <div>
            <div className="relative w-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="39"
                viewBox="0 0 57 39"
                fill="none"
                className="absolute top-0 right-0"
              >
                <path
                  opacity="0.5"
                  d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z"
                  fill="#0369A1"
                />
              </svg>
              <img src={Trophy}></img>
            </div>
          </div>
          <div className="text-xl text-blue_gray  font-[600]">Nibh viverra</div>
          <div className="text-[18px] leading-[160%]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center">
          <div>
            <div className="relative w-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                className="absolute top-0 right-4"
              >
                <path
                  opacity="0.5"
                  d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z"
                  fill="#15803D"
                />
              </svg>
              <img src={Tunnel}></img>
            </div>
          </div>
          <div className="text-xl text-blue_gray  font-[600]">Cursus amet</div>
          <div className="text-[18px]  leading-[160%]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center">
          <div>
            <div className="relative w-[80px]">
              <div className="w-[45px] h-[45px] absolute -right-2 bg-fuchsia-700 rounded-[20px] opacity-[0.5]" />
              <img src={Tv}></img>
            </div>
          </div>
          <div className="text-xl text-blue_gray  font-[600]">
            Ipsum fermentum
          </div>
          <div className="text-[18px] font-base  leading-[160%]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
