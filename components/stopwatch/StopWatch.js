import React, { useState } from "react";
import "./StopWatch.module.css";
import Timer from "../timer/Timer";
// import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch({ max, callback }) {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        console.log(time, max, "callback", callback);
        if (time > max && callback) {
          callback();
          setIsPaused(true);
        }
        else setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      {/* <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      /> */}
    </div>
  );
}

export default StopWatch;
