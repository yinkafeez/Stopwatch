// import React, { useState, useEffect } from "react";

// const Stopwatch = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [lapsCounter, setLapsCounter] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [lapTimes, setLapTimes] = useState([]);

//   // Function to format time
//   const formatTime = (value) => (value < 10 ? `0${value}` : value);

//   // Function to add lap times
//   const handleLapTimes = () => {
//     const newItem = {
//       hours,
//       minutes,
//       seconds,
//     };
//     setLapTimes((prev) => [...prev, newItem]);
//   };

//   // Function to handle laps component
//   const handleLapsComponent = () => {
//     // Adding lap times
//     handleLapTimes();

//     // Adding new laps values
//     const newItem = {
//       laps: lapsCounter + 1, // Incrementing lapsCounter
//       lapTimes,
//     };

//     setLaps((prevLaps) => [...prevLaps, newItem]);

//     // Resetting stopwatch
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);

//     // Incrementing lapsCounter
//     setLapsCounter((prevCounter) => prevCounter + 1);
//   };

//   // useEffect to handle lapsCounter changes
//   useEffect(() => {
//     // Resetting lapTimes when lapsCounter changes
//     setLapTimes([]);
//   }, [lapsCounter]);

//   return (
//     <div>
//       <h2>Stopwatch</h2>
//       {/* Displaying time */}
//       <p>
//         {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
//       </p>
//       {/* Buttons for laps and reset */}
//       <button onClick={handleLapsComponent}>Add Lap</button>
//       <button>Reset</button>
//       {/* Displaying laps in the UI */}
//       {laps.map((lap, i) => (
//         <div key={i}>
//           <p>{formatTime(lap.laps)}</p>
//           {lap.lapTimes.map((lapTime, j) => (
//             <p key={j}>
//               {formatTime(lapTime.hours)}:{formatTime(lapTime.minutes)}:
//               {formatTime(lapTime.seconds)}
//             </p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stopwatch;
