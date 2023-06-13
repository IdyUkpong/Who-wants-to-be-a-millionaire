import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Data from "./Components/Data";
import Timer from "./Components/Timer";
import Start from "./Components/Start";

function App() {
  const [username, setUsername] = useState<any>(null);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isTimeout, setIsTimeout] = useState<boolean>(false);
  const [earned, setEarned] = useState<string>("$ 0");
  const [winEarned, setWinEarned] = useState<string>("$ 0");
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  const moneyPyramid: { id: number; amount: string }[] = useMemo(() => {
    return [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 400" },
      { id: 5, amount: "$ 500" },
      { id: 6, amount: "$ 600" },
      { id: 7, amount: "$ 700" },
      { id: 8, amount: "$ 800" },
      { id: 9, amount: "$ 900" },
      { id: 10, amount: "$ 1000" },
      { id: 11, amount: "$ 1500" },
      { id: 12, amount: "$ 2000" },
      { id: 13, amount: "$ 2500" },
      { id: 14, amount: "$ 4000" },
      { id: 15, amount: "$ 5000" },
    ].reverse();
  }, []);

  useEffect(() => {
    if (questionNumber > 1) {
      const earnedAmount = moneyPyramid.find((money) => money.id === questionNumber - 1)?.amount;
      setEarned(earnedAmount || "");
    }
  }, [moneyPyramid, questionNumber]);

  useEffect(() => {
    if (questionNumber === 15) {
      const winEarnedAmount = moneyPyramid.find((money) => money.id === questionNumber)?.amount;
      setWinEarned(winEarnedAmount || "");
    }
  }, [moneyPyramid, questionNumber]);

  useEffect(() => {
    handleGameWon();
  }, [questionNumber]);

  const handleGameWon = () => {
    if (questionNumber === 15) {
      setIsGameWon(true);
    }
  };

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {isTimeout ? (
              <h1 className="earnedText">You earned: {earned}</h1>
            ) : isGameWon ? (
              <h1 className="congratulation">Congratulations! You won the game and earned: {winEarned}.</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setIsTimeout={setIsTimeout} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="botton">
                  <Data
                    setIsTimeout={setIsTimeout}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item: { id: number; amount: string }, index: number) => (
            <li
              key={index}
              className={questionNumber === item.id ? "moneyListItem active" : "moneyListItem"}
            >
              <span className="moneyListItemNumber">{item.id}</span>
              <span className="moneyListItemAmount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
