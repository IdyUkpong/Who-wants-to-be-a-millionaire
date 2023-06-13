import React, { useEffect, useState } from "react";

type timerProps = {
  setIsTimeout: any;
  questionNumber: any;
};
export default function Timer({ setIsTimeout, questionNumber }: timerProps) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setIsTimeout(true);
    const interval = setInterval(() => {
      setTimer((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setIsTimeout, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return <div>{timer}</div>;
}
