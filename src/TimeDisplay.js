export default function TimeDisplay({ seconds, minutes, hours }) {
  return (
    <div className="time-display">
      <h1>
        <b>{hours < 10 ? `0${Number(hours)}` : Number(hours)}</b> :
        <b>{minutes < 10 ? `0${Number(minutes)}` : Number(minutes)}</b> .
        <b>{seconds < 10 ? `0${Number(seconds)}` : Number(seconds)}</b>
      </h1>
    </div>
  );
}
