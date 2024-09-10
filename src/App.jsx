import { useEffect, useState } from "react";
import Timer from "./components/Timer"
import ControlButtons from "./components/ControlButtons";

function App() {
  const [start, setStart] = useState(false);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    setStart(true);
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimer(interval);
  };

  const handleStop = () => {
    setStart(false);
    clearInterval(timer);
    setTimer(null);
  };

  const handleReset = () => {
    setSeconds(0);
  };

  return (
    <div className="flex justify-center h-screen w-full flex-col">
      <Timer seconds={seconds} setSeconds={setSeconds}/>
      <ControlButtons
        start={start}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
