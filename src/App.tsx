
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategorySelection from "./components/CategorySelection";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import { useQuizProgress } from "./hooks/useQuizProgress";
import { useCountdownTimer } from "./hooks/useCountdownTimer";


const quizData:any = {
  js_basics: [
    {
      id: "q1",
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "A. <script name='script.js'>",
        "B. <script href='script.js'>",
        "C. <script src='script.js'>",
        "D. <script file='script.js'>"
      ],
      correctAnswer: "C",
      timeLimit: 10
    },
    {
      id: "q2",
      question: "Which company developed JavaScript?",
      options: [
        "A. Microsoft",
        "B. Netscape",
        "C. Google",
        "D. Mozilla"
      ],
      correctAnswer: "B",
      timeLimit: 10
    }
  ],
  react_basics: [
    {
      id: "q1",
      question: "What is JSX in React?",
      options: [
        "A. A style sheet",
        "B. A JavaScript syntax extension",
        "C. A JavaScript function",
        "D. A React framework"
      ],
      correctAnswer: "B",
      timeLimit: 10
    }
  ]
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quizDataForCategory, setQuizDataForCategory] = useState<any[]>([]);

  const { currentQuestionIndex, score, answeredQuestions, goToNextQuestion, handleAnswer, resetQuiz } = useQuizProgress(quizDataForCategory.length);
  const { timeLeft, startTimer, stopTimer, resetTimer } = useCountdownTimer(10, () => goToNextQuestion());

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setQuizDataForCategory(quizData[categoryId]); // Load the questions for the selected category
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CategorySelection onCategorySelect={handleCategorySelect} />}
        />
        <Route
          path="/quiz/:categoryId"
          element={
            selectedCategory && (
              <QuestionPage
                question={quizDataForCategory[currentQuestionIndex]}
                onAnswer={handleAnswer}
                onTimeUp={() => goToNextQuestion()}
                timeLeft={timeLeft}
                startTimer={startTimer}
                resetTimer={resetTimer}
                stopTimer={stopTimer}
              />
            )
          }
        />
        <Route
          path="/result"
          element={<ResultPage score={score} totalQuestions={quizDataForCategory.length} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
