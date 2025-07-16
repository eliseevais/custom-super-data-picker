import { FaRegCalendarAlt } from "react-icons/fa";
import type { WidthMode } from "../../types/types.ts";
import s from "./dateRangeMainDisplay.module.css";

type Props = {
  start: string;
  end: string;
  onClick: () => void;
  widthMode?: WidthMode;
  compact?: boolean;
};

export const DateRangeMainDisplay = ({
  start,
  end,
  onClick,
  widthMode,
  compact,
}: Props) => (
  <div
    className={`${s.inputLine} ${
      widthMode === "restricted"
        ? s.restricted
        : widthMode === "auto"
          ? s.auto
          : s.full
    } ${compact ? s.compact : ""}`}
    onClick={onClick}
  >
    <div className={s.calendarIcon}>
      <FaRegCalendarAlt />
    </div>
    <div className={s.timeRange}>
      {start} → {end}
    </div>
  </div>
);
