import React, { useEffect, useState } from "react";
import Quiz from "./pages/quiz.js";
import Result from "./pages/result";

function App() {
  const [shouldStart, setShouldStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const isStarted = window.localStorage.getItem("isStarted");

    if (isStarted == "true") {
      setShouldStart(true);
      setIsFinished(false);
    } else if (isStarted == "false") {
      setIsFinished(true);
      setShouldStart(false);
    } else {
      setShouldStart(false);
      setIsFinished(false);
    }
  }, []);

  return (
    <div className="w-[100%] h-[100%] ">
      {shouldStart && !isFinished && (
        <Quiz
          setFinish={() => {
            setIsFinished(true);
            setShouldStart(false);
          }}
        />
      )}
      {isFinished && !shouldStart && (
        <Result
          startNewQuiz={() => {
            setIsFinished(false);
            setShouldStart(true);
          }}
        />
      )}

      {!shouldStart && !isFinished && (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <button
            className="p-3 border-solid border-blue-800 border-2 rounded-lg
          text-white bg-blue-800 cursor-pointer"
            onClick={() => {
              setIsFinished(false);
              setShouldStart(true);
            }}
          >
            Quize Başla
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
