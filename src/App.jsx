import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import ControlButtons from "./components/ControlButtons";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const handleStart = () => {
    if (seconds === 0) {
      return;
    }
    setIsRunning(true);
    const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimerInterval(id);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const handleReset = () => {
    setSeconds(0);
  };

  useEffect(() => {
  if (seconds==0){
    handleStop()
  }
  }, [seconds])
  return (
    <div className="flex justify-center h-screen w-full flex-col">
      <Timer seconds={seconds} setSeconds={setSeconds} />
      <ControlButtons
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
