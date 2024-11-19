// src/components/Timer.tsx
import React, { useEffect } from "react";
import { useCountdownTimer } from "../hooks/useCountdownTimer"

interface TimerProps {
  timeLimit: number; 
  onTimeUp: () => void; 
}

const Timer: React.FC<TimerProps> = ({ timeLimit, onTimeUp }) => {
  const { timeLeft, startTimer, stopTimer, resetTimer } = useCountdownTimer(timeLimit, onTimeUp);

  useEffect(() => {
    startTimer(); 
    return () => {
      stopTimer(); 
    };
  }, [startTimer, stopTimer]);

  return (
    <div>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
