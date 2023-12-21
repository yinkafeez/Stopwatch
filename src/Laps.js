import React from "react";
export default function Laps({ laps }) {
  return (
    <div className="laps-container">
      {/* <div className="laps"> */}
      <div className="header-cell">
        <p>Laps</p>
        <p> Lap Times </p>
      </div>
      <div className="lap-times-container">
        {laps.map((lap, i) => {
          return (
            <div key={i} className="lap-times">
              <p>{i + 1 < 10 ? `0${i + 1}` : i + 1}</p>

              <p key={i}>
                {lap.hours < 10 ? `0${lap.hours}` : lap.hours}:
                {lap.minutes < 10 ? `0${lap.minutes}` : lap.minutes}.
                {lap.seconds < 10 ? `0${lap.seconds}` : lap.seconds}
              </p>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
