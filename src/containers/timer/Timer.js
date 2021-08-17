import React from "react";
import "./timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useHistory } from "react-router-dom";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function Timer() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  let endTime = new Date("August 24, 2021 10:00:00 "); // use UNIX timestamp in seconds
  endTime = endTime.getTime() / 1000;
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const history = useHistory();
  return (
    <>
      <div className="countdown countdown-container container">
        <div className="clock row justify-content-center">
          <div className="row justify-content-center">
            <div style={{ width: "auto" }}>
              <CountdownCircleTimer
                {...timerProps}
                size={140}
                colors={[["#ffffff"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
                trailColor={"rgba(243, 182, 67, 0.61)"}
              >
                {({ elapsedTime }) =>
                  renderTime("", getTimeDays(daysDuration - elapsedTime))
                }
              </CountdownCircleTimer>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  color: "white",
                }}
              >
                Days
              </p>
            </div>
            <div style={{ width: "auto" }}>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#ffffff"]]}
                size={140}
                duration={daySeconds}
                trailColor={"rgba(243, 182, 67, 0.61)"}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > hourSeconds,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("", getTimeHours(daySeconds - elapsedTime))
                }
              </CountdownCircleTimer>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  color: "white",
                }}
              >
                Hours
              </p>
            </div>
            <div style={{ width: "auto" }}>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#ffffff"]]}
                duration={hourSeconds}
                size={140}
                trailColor={"rgba(243, 182, 67, 0.61)"}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("", getTimeMinutes(hourSeconds - elapsedTime))
                }
              </CountdownCircleTimer>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  color: "white",
                }}
              >
                Minutes
              </p>
            </div>
            <div style={{ width: "auto" }}>
              {" "}
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#ffffff"]]}
                duration={minuteSeconds}
                size={140}
                trailColor={"rgba(243, 182, 67, 0.61)"}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("", getTimeSeconds(elapsedTime))
                }
              </CountdownCircleTimer>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  color: "white",
                }}
              >
                Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          history.push("/register");
        }}
        className="cmn-register-btn"
      >
        Register Now
      </button>
    </>
  );
}

export default Timer;
