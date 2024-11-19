// src/hooks/useCountdownTimer.ts
import { useState, useEffect, useRef } from "react";

// Custom hook to manage the countdown timer
export const useCountdownTimer = (timeLimit: number, onTimeUp: () => void) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          onTimeUp(); // Trigger callback when timer reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLimit, onTimeUp]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setTimeLeft(timeLimit); // Reset the timer to the original time limit
    startTimer(); // Optionally restart the timer
  };

  return { timeLeft, startTimer, stopTimer, resetTimer };
};
