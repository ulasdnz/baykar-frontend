import React from "react";

const Time = ({ second = 30 }) => {
  return (
    <div>
      <div
        className="ml-auto relative right-[10%] top-12 w-10 h-10 flex-col  border-[5px] border-solid
        rounded-[50%] flex flex-col items-center justify-center p-5"
       style={second<20?{borderColor:"green"}:{borderColor:"rgb(185, 28, 28)"}}
      >
        <div>{second}</div>
      </div>
    </div>
  );
};

export default Time;
