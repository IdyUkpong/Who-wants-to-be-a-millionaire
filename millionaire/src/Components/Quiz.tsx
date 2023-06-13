import React, { useEffect, useState } from "react";
import "./Quiz.css";
import useSound  from "use-sound";
import play from "../assets/play.wav"
import correct from "../assets/correctans.wav"
import wrong from "../assets/wrong.wav"

type propsTypes = {
  data: string | any;
  setIsTimeout: number | any;
  setQuestionNumber: number | any;
  questionNumber: number | any;
};
export default function Quiz({
  data,
  setIsTimeout,
  setQuestionNumber,
  questionNumber,
}: propsTypes) {
  const [question, setQuestion] = useState<string | any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | any>(null);
  const [className, setClassName] = useState<string | any>("answer");
  const [begin] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

useEffect(()=>{
  begin()
}, [begin])


  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

const delay = (time:number, callback:string|any)=>{
setTimeout(()=>{
  callback();
},time)
}

 const handleClick = (ans: any) => {
  setSelectedAnswer(ans);
  setClassName("answer active");
  delay(2000,()=>
    setClassName(ans.correct ? "answer correct" : "answer wrong")
  )
  delay(5000,()=>
{
  if (ans.correct) {
    correctAnswer()
    delay(1000, ()=>{
      setQuestionNumber((previous:number) => previous + 1)
      setSelectedAnswer(null)
    })
    
  }else{
    wrongAnswer()
    delay(1000,()=>{
      setIsTimeout(true)
    })
  
  }
}
  )
};


  return (
    <div className="quiz">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans: any, index: number) => (
          <div
            key={index}
            className={selectedAnswer === ans ? className : "answer"}
            onClick={() => handleClick(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
}
