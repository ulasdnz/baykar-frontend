import React, { useEffect } from "react";
import { useState } from "react";

const Result = ({ startNewQuiz }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let currentQuestion = window.localStorage.getItem("questionNumber")
      ? window.localStorage.getItem("questionNumber")
      : 0;
    const questionNumber = currentQuestion - 9;
    const ans = [];

    for (let i = questionNumber; i <= currentQuestion; i++) {
      const answer = window.localStorage.getItem(i.toString());
      console.log(answer);
      ans.push(answer);
    }
    setAnswers(ans);
  }, []);

  const handleNewQuiz = () => {
    const userIdStr = window.localStorage.getItem("userId");
    const userId = parseInt(userIdStr);
    window.localStorage.clear();
    let newUserId;
    if (userId < 10 && userId > 1) {
      newUserId = userId + 1;
      window.localStorage.setItem("userId", newUserId);
    } else if (userId == 1) {
      newUserId = 2;
      window.localStorage.setItem("userId", newUserId);
    } else {
      newUserId = 1;
      window.localStorage.setItem("userId", newUserId);
    }

    window.localStorage.setItem("isStarted", "true");

    startNewQuiz();
  };

  return (
    <div className="flex items-end justify-center gap-12 ">
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-5">
                Question Number
              </th>
              <th scope="col" class="px-6 py-5 text-start">
                Your Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, i) => (
              <tr
                key={i}
                className={
                  i % 2 == 0
                    ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    : "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                }
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </td>
                <td
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {answer == "null" ? (
                    ""
                  ) : (
                    answer
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="p-3 border-solid border-blue-800 border-2 rounded-lg
              ml-auto mr-auto
          text-white bg-blue-800 cursor-pointer mb-12"
          onClick={handleNewQuiz}
        >
          New Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
