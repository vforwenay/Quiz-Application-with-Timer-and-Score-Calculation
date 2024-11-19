
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionPageProps {
  question: { id: string; question: string; options: string[]; correctAnswer: string };
  onAnswer: (isCorrect: boolean) => void;
  onTimeUp: () => void;
  timeLeft: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  question,
  onAnswer,
  onTimeUp,
  timeLeft,
  startTimer,
  stopTimer,
  resetTimer,
}) => {
  const navigate = useNavigate();

  // Start the timer when the component mounts
  useEffect(() => {
    startTimer();
    return () => stopTimer(); // Stop the timer when moving to the next question
  }, [startTimer, stopTimer]);

  const handleOptionClick = (option: string) => {
    const isCorrect = option === question.correctAnswer;
    onAnswer(isCorrect); // Handle answer submission
  };

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Automatically go to the next question if time runs out
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className="question-page">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>

      <div>
        <p>Time left: {timeLeft} seconds</p>
      </div>
    </div>
  );
};

export default QuestionPage;
