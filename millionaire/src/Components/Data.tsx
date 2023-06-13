import React, { useState } from "react";
import Quiz from "./Quiz";

type DataProps = {
  setIsTimeout: any;
  setQuestionNumber: any;
  questionNumber: any;
};

export default function Data({
  setIsTimeout,
  setQuestionNumber,
  questionNumber,
}: DataProps) {
  //you earned should have a backgroundcolorand border radius
  // button for restart game
  // score highlight should highlight the current score if the user fails

  const data = [
    {
      id: 1,
      question: "Who is the developer of this game?",
      answers: [
        {
          text: "Idongesit",
          correct: true,
        },
        {
          text: "Scott",
          correct: false,
        },
        {
          text: "Mosh",
          correct: false,
        },
        {
          text: "Lama",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which year did the Queen of England died?",
      answers: [
        {
          text: "8th, September 2021",
          correct: false,
        },
        {
          text: "8th, September 2022",
          correct: true,
        },
        {
          text: "8th, December 2021",
          correct: false,
        },
        {
          text: "8th, December 2022",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How many Continent are there in the world?",
      answers: [
        {
          text: "Six",
          correct: false,
        },
        {
          text: "Five",
          correct: false,
        },
        {
          text: "Seven",
          correct: true,
        },
        {
          text: "Four",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "When did Arsenal win Premier League?",
      answers: [
        {
          text: "2004/05 season",
          correct: false,
        },
        {
          text: "2003/04 season",
          correct: true,
        },
        {
          text: "2005/06 season",
          correct: false,
        },
        {
          text: "2001/02 season",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the current President Elected of Nigeria?",
      answers: [
        {
          text: "Tinibu Bola",
          correct: true,
        },
        {
          text: "Biden ",
          correct: false,
        },
        {
          text: "Donald Trump",
          correct: false,
        },
        {
          text: "GoodLuck Johnathan",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is 5 + 5 ?",
      answers: [
        {
          text: "55",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "10",
          correct: true,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is 5 + 10 ?",
      answers: [
        {
          text: "15",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "7",
          correct: false,
        },
        {
          text: "90",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is 9 + 9 ?",
      answers: [
        {
          text: "50",
          correct: false,
        },
        {
          text: "49",
          correct: false,
        },
        {
          text: "99",
          correct: false,
        },
        {
          text: "18",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What is 5 x 5 ?",
      answers: [
        {
          text: "10",
          correct: true,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "55",
          correct: false,
        },
        {
          text: "25",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "What is 3 + 4 ?",
      answers: [
        {
          text: "7",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
        {
          text: "9",
          correct: false,
        },
        {
          text: "10",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the developer of this game?",
      answers: [
        {
          text: "Idongesit",
          correct: true,
        },
        {
          text: "Scott",
          correct: false,
        },
        {
          text: "Mosh",
          correct: false,
        },
        {
          text: "Lama",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the opposite of go?",
      answers: [
        {
          text: "come",
          correct: true,
        },
        {
          text: "coming",
          correct: false,
        },
        {
          text: "going",
          correct: false,
        },
        {
          text: "went",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "In 1893, what country was the first to grant women the right to vote?",
      answers: [
        {
          text: "Denmark",
          correct: false,
        },
        {
          text: "Sweden",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "New Zealand",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "What components of blood are responsible for blood clotting?",
      answers: [
        {
          text: "Red Blood Cells",
          correct: false,
        },
        {
          text: "Platelets",
          correct: true,
        },
        {
          text: "White Blood Cells",
          correct: false,
        },
        {
          text: "Lymphocytes",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is 20 * 5?",
      answers: [
        {
          text: "205",
          correct: false,
        },
        {
          text: "25",
          correct: false,
        },
        {
          text: "100",
          correct: true,
        },
        {
          text: "105",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "People who advocate war are commonly referred to as what?",
      answers: [
        {
          text: "Rams",
          correct: false,
        },
        {
          text: "Gorillas",
          correct: false,
        },
        {
          text: "Doves",
          correct: false,
        },
        {
          text: "Hawks",
          correct: true,
        },
      ],
    },
    {
      id: 17,
      question:
        "What name is legally used to indicate a woman whose name is unknown",
      answers: [
        {
          text: "Jane Doe",
          correct: true,
        },
        {
          text: "Joan Doe",
          correct: false,
        },
        {
          text: "Lotta Doe",
          correct: true,
        },
        {
          text: "Jean Doe",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question:
        "A person who earns a Ph.D. is literally a certified doctor of what?",
      answers: [
        {
          text: "Pharmacology",
          correct: false,
        },
        {
          text: "Photography",
          correct: false,
        },
        {
          text: "Philosophy",
          correct: true,
        },
        {
          text: "Psychology",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "In the U.S., if it's not Daylight Saving Time, it's what?",
      answers: [
        {
          text: "Borrowed time",
          correct: false,
        },
        {
          text: "Standard time",
          correct: true,
        },
        {
          text: "Party time",
          correct: false,
        },
        {
          text: "Over Time",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Which month has only 28 days (unless it's a leap year)?",
      answers: [
        {
          text: "May",
          correct: false,
        },
        {
          text: "August",
          correct: false,
        },
        {
          text: "February",
          correct: true,
        },
        {
          text: "March",
          correct: false,
        },
      ],
    },
  ];

  const randomQuestions = data.sort(() => Math.random() - 0.5).slice(0, 15);
  return (
    <div>
      <Quiz
        data={randomQuestions}
        setIsTimeout={setIsTimeout}
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
      />
    </div>
  );
}
