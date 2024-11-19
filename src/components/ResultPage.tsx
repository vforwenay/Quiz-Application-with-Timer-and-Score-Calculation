
import React from "react";
import { calculateFinalScore } from "../utils/utils";

interface ResultPageProps {
  score: number;
  totalQuestions: number;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, totalQuestions }) => {
  const { score: finalScore, scorePercentage, feedback } = calculateFinalScore(score, totalQuestions, totalQuestions - score);

  return (
    <div className="result-page">
      <h2>Quiz Finished!</h2>
      <p>You got {finalScore} out of {totalQuestions} questions correct.</p>
      <p>Your score: {scorePercentage}%</p>
      <p>{feedback}</p>
    </div>
  );
};

export default ResultPage;
