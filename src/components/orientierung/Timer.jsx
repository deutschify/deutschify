import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../App.css"

const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
  isPlaying: true,
  size: 100,
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

const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

export default function App() {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + hourSeconds; // use UNIX timestamp in seconds
  const remainingTime = endTime - startTime;


  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors="#FDF0D5"
        trailColor="#2F4858"
        // colors="#FDF0D5"
        
        duration={hourSeconds}
        initialRemainingTime={remainingTime}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color: "#FDF0D5", textAlign:"center"}}>
            {renderTime("Minuten", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
          </div>
  );
}
