
import React, { createContext, useState, useContext, ReactNode } from "react";


interface QuizContextType {
  selectedCategory: string | null;
  currentQuestionIndex: number;
  score: number;
  unansweredQuestions: number;
  setSelectedCategory: (category: string) => void;
  incrementQuestionIndex: () => void;
  updateScore: (correct: boolean) => void;
  setUnansweredQuestions:any;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode; // This allows any child components to be passed
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);

  const incrementQuestionIndex = () => setCurrentQuestionIndex((prev) => prev + 1);
  const updateScore = (correct: boolean) => {
    setScore((prev) => (correct ? prev + 1 : prev));
  };

  return (
    <QuizContext.Provider
      value={{
        selectedCategory,
        currentQuestionIndex,
        score,
        unansweredQuestions,
        setSelectedCategory,
        incrementQuestionIndex,
        updateScore,
        setUnansweredQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
