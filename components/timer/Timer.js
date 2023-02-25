import React from "react";


export default function Timer({ hours, minutes, seconds, completed }) {
  console.log( hours, minutes, seconds);
  // return <span>{hours}:{minutes}:{seconds}</span>;
  return (
    <div className="timer">
      <span className="digits">
        {("0" + hours).slice(-2)}
      </span>
      <span className="digits">
        :{("0" + minutes).slice(-2)}
      </span>
      <span className="digits mili-sec">
        :{("0" + seconds).slice(-2)}
      </span>
    </div>
  );
}
