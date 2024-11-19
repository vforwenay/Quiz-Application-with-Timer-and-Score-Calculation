// src/utils.ts

// 1. Format time in seconds to mm:ss
export const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  
  // 2. Calculate progress as a percentage
  export const calculateProgress = (currentIndex: number, totalQuestions: number): string => {
    const progress = (currentIndex / totalQuestions) * 100;
    return `${Math.round(progress)}%`;
  };
  
  // 3. Calculate the score and unanswered questions
  export const calculateFinalScore = (correctAnswers: number, totalQuestions: number, unansweredQuestions: number) => {
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    let feedback = "Keep practicing!";
  
    if (scorePercentage > 80) {
      feedback = "Great job!";
    } else if (scorePercentage > 50) {
      feedback = "Good work, but you can do better!";
    }
  
    return {
      score: correctAnswers,
      totalQuestions,
      unansweredQuestions,
      scorePercentage,
      feedback,
    };
  };
  