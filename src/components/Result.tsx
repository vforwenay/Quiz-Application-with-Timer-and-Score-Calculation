
import React from "react";
import { calculateFinalScore } from "../utils/utils"; // Import the utility function

interface ResultProps {
  score: number;
  totalQuestions: number;
  unansweredQuestions: number;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions, unansweredQuestions }) => {
  const {
    score: finalScore,
    scorePercentage,
    feedback,
  } = calculateFinalScore(score, totalQuestions, unansweredQuestions);

  return (
    <div className="result">
      <h3>Quiz Finished!</h3>
      <p>
        You got {finalScore} out of {totalQuestions} questions correct.
      </p>
      <p>Your score: {scorePercentage}%</p>
      <p>{feedback}</p>
    </div>
  );
};

export default Result;
