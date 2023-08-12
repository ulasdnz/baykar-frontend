import React, { useEffect, useState } from "react";
import Quiz from "./pages/quiz.js";
import Result from "./pages/result";

function App() {
  const [shouldStart, setShouldStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startNewQuiz, setStartNewQuiz] = useState(false);

  useEffect(() => {
    const isStarted = window.localStorage.getItem("isStarted");

    if (isStarted == "true") {
      setShouldStart(true);
      setIsFinished(false);
      setStartNewQuiz(false);
    } else if (isStarted == "false") {
      setIsFinished(true);
      setShouldStart(false);
      setStartNewQuiz(false);
    } else {
      setStartNewQuiz(true);
      setShouldStart(false);
      setIsFinished(false);
    }
  }, []);

  return (
    <div className="w-[100%] h-[100%] ">
      {shouldStart && (
        <Quiz
          setFinish={() => {
            setIsFinished(true);
            setShouldStart(false);
          }}
        />
      )}
      {isFinished && (
        <Result
          startNewQuiz={() => {
            setIsFinished(false);
            setShouldStart(true);
          }}
        />
      )}

      {startNewQuiz && (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <button
            className="p-3 border-solid border-blue-800 border-2 rounded-lg
          text-white bg-blue-800 cursor-pointer"
            onClick={() => setShouldStart(true)}
          >
            Quize Başla
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
