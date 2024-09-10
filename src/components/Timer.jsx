import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ seconds, setSeconds }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <button className="text-2xl" onClick={() => setSeconds((prevSeconds) => prevSeconds + 1)}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <span className="font-bold text-8xl">
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
      <button className="text-2xl"
        onClick={() => {
          if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default Timer;
