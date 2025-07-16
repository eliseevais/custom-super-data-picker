import { FaRegCalendarAlt } from "react-icons/fa";
import s from "./DateRangeDisplay.module.css";

type Props = {
  start: string;
  end: string;
  onClick: () => void;
  widthMode?: "restricted" | "full" | "auto";
};

export const DateRangeDisplay = ({ start, end, onClick, widthMode }: Props) => (
  <div
    className={`${s.inputLine} ${
      widthMode === "restricted"
        ? s.restricted
        : widthMode === "auto"
          ? s.auto
          : s.full
    }`}
    onClick={onClick}
  >
    {" "}
    <div className={s.calendarIcon}>
      <FaRegCalendarAlt />
    </div>
    <div className={s.timeRange}>
      {start} → {end}
    </div>
  </div>
);
