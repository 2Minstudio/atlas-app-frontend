import React, { useState } from "react";
import "./StopWatch.module.css";
// import "./Timer.module.css";
// import Timer from "../timer/Timer";
// import ControlButtons from "../ControlButtons/ControlButtons";
import Countdown, { zeroPad } from "react-countdown";

class StopWatch extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    const { duration, callback } = this.props;
    const time = duration.split(":");
    const h = time[0] * 3600000;
    const m = time[1] * 60000;
    const s = time[2] * 1000;
    const timercount = Date.now() + h + m + s;
    this.setState({ counter: timercount });
  }

  Timer = ({ hours, minutes, seconds }) => {
    console.log(hours, minutes, seconds);

    return (
      <div className="timer">
        <span className="digits">{zeroPad(hours)}</span>
        <span className="digits">:{zeroPad(minutes)}</span>
        <span className="digits mili-sec">:{zeroPad(seconds)}</span>
      </div>
    );
  };

  // ({ duration, callback })
  render() {
    const { counter } = this.state;
    const { callback } = this.props;
    console.log(counter, "counter");
    if (counter)
      return (
        <div className="stop-watch">
          <Countdown
            date={counter}
            autoStart={true}
            renderer={this.Timer}
            onComplete={callback}
          />
        </div>
      );
  }
}

export default StopWatch;
