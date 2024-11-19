
import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onAnswer,
  currentAnswer,
}) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${currentAnswer === option ? "selected" : ""}`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
