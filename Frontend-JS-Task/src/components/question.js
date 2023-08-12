import React, { useEffect, useState } from "react";

const Question = ({
  question,
  second,
  questionNumber,
  handleSelectedAnswer,
  selectedAnswer,
}) => {
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  useEffect(() => {
    setOptionA(question?.body.split("\n")[0]);
    setOptionB(question?.body.split("\n")[1]);
    setOptionC(question?.body.split("\n")[2]);
    setOptionD(question?.body.split("\n")[3]);
  }, [question]);

  const userId = window.localStorage.getItem("userId");
  const showNumber = parseInt(questionNumber) + 1 - (userId - 1) * 10;

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div className="text-start font-bold text-2xl pb-4 max-md:w-[250px] w-[800px]">
        {showNumber}. Question
      </div>
      <div className="p-2 max-md:w-[300px] text-start capitalize mb-1 w-[800px]">
        {question?.title} ?
      </div>
      <div className="flex flex-col max-md:items-center items-start   justify-center ">
        <div
          className="p-2 max-md:w-[300px] w-[800px] text-start rounded-[50px] hover:bg-blue-600 cursor-pointer mt-2"
          style={
            selectedAnswer == optionA
              ? { backgroundColor: "rgb(37, 99 ,235)" }
              : {}
          }
          onClick={second < 20 ? () => handleSelectedAnswer(optionA) : () => {}}
        >
          <span className="text-xl font-bold mr-2 ">A)</span>
          {optionA?.charAt(0).toUpperCase() + optionA?.slice(1)}
        </div>
        <div
          className="p-2 max-md:w-[300px] w-[800px] text-start rounded-[50px] hover:bg-blue-600 cursor-pointer mt-2"
          style={
            selectedAnswer == optionB
              ? { backgroundColor: "rgb(37, 99 ,235)" }
              : {}
          }
          onClick={second < 20 ? () => handleSelectedAnswer(optionB) : () => {}}
        >
          <span className="text-xl font-bold mr-2">B)</span>
          {optionB?.charAt(0).toUpperCase() + optionB?.slice(1)}
        </div>
        <div
          className="p-2 max-md:w-[300px] w-[800px] text-start rounded-[50px] hover:bg-blue-600 cursor-pointer mt-2"
          style={
            selectedAnswer == optionC
              ? { backgroundColor: "rgb(37, 99 ,235)" }
              : {}
          }
          onClick={second < 20 ? () => handleSelectedAnswer(optionC) : () => {}}
        >
          <span className="text-xl font-bold mr-2">C)</span>
          {optionC?.charAt(0).toUpperCase() + optionC?.slice(1)}
        </div>
        <div
          className="p-2 max-md:w-[300px] w-[800px] text-start rounded-[50px] hover:bg-blue-600 cursor-pointer mt-2"
          style={
            selectedAnswer == optionD
              ? { backgroundColor: "rgb(37, 99 ,235)" }
              : {}
          }
          onClick={second < 20 ? () => handleSelectedAnswer(optionD) : () => {}}
        >
          <span className="text-xl font-bold mr-2">D)</span>
          {optionD?.charAt(0).toUpperCase() + optionD?.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default Question;
