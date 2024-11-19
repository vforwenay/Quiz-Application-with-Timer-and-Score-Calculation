
import React from "react";
import { calculateProgress } from "../utils/utils";

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, totalQuestions }) => {
  const progress = calculateProgress(currentIndex, totalQuestions);

  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: progress }} />
      <p>{progress}</p>
    </div>
  );
};

export default ProgressBar;
