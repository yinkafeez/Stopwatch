import { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";
import Button from "./Button";
import Laps from "./Laps";
function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // Laps Array
  const [laps, setLaps] = useState([]);

  // Laps Times Array
  // const [lapTimes, setLapTimes] = useState([]);

  // open laps component
  const [isopenLaps, setIsOpenLaps] = useState(false);

  // number of laps state
  // const [lapsCounter, setLapsCounter] = useState(0);

  //  to initiate counter
  const [isCounting, setIsCounting] = useState(false);

  // toggling start and pause button
  const [openStartBtn, setOpenStartBtn] = useState(false);

  // updating seconds time
  useEffect(function () {
    let interval;
    if (isCounting) {
      function updateSecondsTime() {
        interval = setTimeout(() => {
          setSeconds((prev) => prev + 1); // adding 1 to seconds on every 1 seconds
        }, 1000);
      }
      updateSecondsTime(); // calling functions that update seconds state on every 1 seconds
    } else {
      clearInterval(interval); // Clear the interval when not counting
    }
    return () => clearInterval(interval);
  });

  // updating minute time
  useEffect(
    function () {
      function updateMinuteTime() {
        if (seconds === 60) {
          setMinutes((prev) => prev + 1); // adding 1 to minutes state when seconds  >  60
          setSeconds(0); // setting seconds back to 0 when munites is being added
        }
      }
      updateMinuteTime();
    },
    [seconds]
  );

  // updating hour time
  useEffect(
    function () {
      function updateHourTime() {
        if (minutes === 60) {
          setHours((prev) => prev + 1); // adding 1 to hours state when minutes  >  60
          setMinutes(0); // setting minutes state back to 0 when hours is being added
        }
      }
      updateHourTime();
    },
    [minutes]
  );
  //  changing start btn to pause btn and vice versa
  function handleStartBtn() {
    setOpenStartBtn((prev) => !prev); // changing start btn to pause
    setIsCounting(true); // start updating seconds state
  }

  // handle pause btn to  change to play btn
  function handlePauseBtn() {
    setOpenStartBtn((prev) => !prev); // change pause to start btn
    setIsCounting(false); // stop updating seconds state
  }

  // handle rest button
  function handleResetBtn() {
    // setting iscounting(what makes the timer to start) to false
    setIsCounting(false);

    // setting times back to default
    setSeconds(0);
    setMinutes(0);
    setHours(0);

    // setting toggel start and pause button to false
    setOpenStartBtn(false);

    // setting laps array back to empty
    setLaps([]);
    setIsOpenLaps(false);
  }

  // open laps component and adding of laps
  function handleLapsComponent() {
    // opening laps conponent
    setIsOpenLaps(true);

    // adding lap times
    setLaps((prevLaps) => [
      ...prevLaps,
      {
        hours,
        minutes,
        seconds,
      },
    ]);

    // reset stop watch
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <div className="container">
      <div className="App">
        <TimeDisplay seconds={seconds} minutes={minutes} hours={hours} />

        {isopenLaps && <Laps laps={laps} />}

        <Button
          setIsCounting={setIsCounting}
          onHandleResetBtn={handleResetBtn}
          onHandleLapsComponent={handleLapsComponent}
          openStartBtn={openStartBtn}
          isCounting={isCounting}
          onHandleStartBtn={handleStartBtn}
          onHandlePauseBtn={handlePauseBtn}
        />
      </div>
    </div>
  );
}

export default App;
