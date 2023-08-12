import React, { useEffect, useState } from "react";
import "../App.css";
import Time from "../components/time";
import Question from "../components/question";
import axios from "axios";

function Quiz({ setFinish }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState();
  const [showButton, setShowButton] = useState(true)

  const [second, setSecond] = useState(
    window.localStorage.getItem("time")
      ? window.localStorage.getItem("time")
      : 30
  );



  const handleNextQuestion = (fromButtonClick = false) => {
    setShowButton(false)
    if (
      questionNumber == 9 ||
      (questionNumber > 9 && (questionNumber - 9) % 10 == 0)
    ) {
      window.localStorage.setItem(questionNumber?.toString(), selectedAnswer);
      window.localStorage.setItem("isStarted", "false");
      alert("bitti");
      return setFinish();
    }

    window.localStorage.setItem(questionNumber?.toString(), selectedAnswer);

    const nextQuestionNumber = parseInt(questionNumber) + 1;

    window.localStorage.setItem("questionNumber", nextQuestionNumber);

    if (fromButtonClick) window.localStorage.setItem("time", 31);
    else window.localStorage.setItem("time", 30);

    setSelectedAnswer(null);
    setQuestionNumber(nextQuestionNumber);
  };

  const decreaseTime = () => {
    const realTime = window.localStorage.getItem("time");
    const time = realTime;
    if (time == 0) {
      handleNextQuestion(false);
      setSecond(30);
      return;
    }
    setSecond(time - 1);
  };

  useEffect(() => {
    setShowButton(true)
    window.localStorage.setItem("time", second);
    setTimeout(decreaseTime, 1000);
  }, [second]);


  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setQuestions(response.data);
    };

    getQuestions();

    const user = window.localStorage.getItem("userId")
      ? window.localStorage.getItem("userId")
      : 1;

    let currentQuestion = window.localStorage.getItem("questionNumber")
      ? window.localStorage.getItem("questionNumber")
      : 0;


    if (!currentQuestion) {
      let userIdNumber = parseInt(user) - 1;
      console.log("userIdNumber ", userIdNumber);

      currentQuestion = userIdNumber * 10 + parseInt(currentQuestion);
      console.log("currentQuestion ", currentQuestion);
      setQuestionNumber(currentQuestion);
      window.localStorage.setItem("questionNumber", currentQuestion);
    }else{
        console.log("currentQuestion ", currentQuestion);
        setQuestionNumber(currentQuestion);
    }

    window.localStorage.setItem("isStarted", "true");
    window.localStorage.setItem("userId", user);
  }, []);


  return (
    <div className="Quiz">
      <div>
        <Time second={second} />
        <Question
          handleSelectedAnswer={(ans) => setSelectedAnswer(ans)}
          selectedAnswer={selectedAnswer}
          question={questions[questionNumber]}
          second={second}
          questionNumber={questionNumber}
        />
        <div className="flex items-center justify-center">
          {second < 20 && showButton && (
            <button
              className="p-3 border-solid border-blue-800 border-2 rounded-lg
              ml-auto mr-auto
          text-white bg-blue-800 cursor-pointer"
              onClick={() => handleNextQuestion(true)}
            >
              Kaydet ve İlerle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
