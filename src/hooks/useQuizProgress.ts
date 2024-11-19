// src/hooks/useQuizProgress.ts
import { useState } from "react";

export function useQuizProgress(totalQuestions: number) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1); // Increment score if the answer is correct
    }
    setAnsweredQuestions((prev) => prev + 1); // Increment answered questions count
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1); // Move to the next question
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(0);
  };

  return {
    currentQuestionIndex,
    score,
    answeredQuestions,
    handleAnswer,
    goToNextQuestion,
    resetQuiz
  };
}
