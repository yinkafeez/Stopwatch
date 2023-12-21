import { VscRefresh } from "react-icons/vsc";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function Button({
  onHandleResetBtn,
  onHandleLapsComponent,
  openStartBtn,
  onHandleStartBtn,
  onHandlePauseBtn,
}) {
  return (
    <div className="btn-container">
      <div className="reset-btn">
        <button>
          <VscRefresh className="icon" onClick={onHandleLapsComponent} />
        </button>
      </div>
      <div className="start-stop-btn">
        {openStartBtn ? (
          <button onClick={onHandlePauseBtn}>
            <FaPause className="icon" />
          </button>
        ) : (
          <button onClick={onHandleStartBtn}>
            <FaPlay className="icon" />
          </button>
        )}
      </div>
      <div className="reset-btn">
        <button>
          <FaArrowRotateLeft className="icon" onClick={onHandleResetBtn} />
        </button>
      </div>
    </div>
  );
}
