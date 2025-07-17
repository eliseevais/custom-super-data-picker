import { DateTimeInput } from "./dateTimeInput";
import type { TimeType } from "../../../../types/types.ts";
import s from "./manualInput.module.css";
import { memo } from "react";

type Props = {
  start: string;
  end: string;
  isInvalid: boolean;
  onChange: (value: string, type: TimeType) => void;
  compact?: boolean;
};

export const ManualInput = memo(
  ({ start, end, isInvalid, onChange, compact }: Props) => {
    return (
      <div className={`${s.absoluteTime} ${compact ? s.compact : ""}`}>
        <h4 className={s.sectionTitle}>Manual input</h4>
        <div className={s.timeInputs}>
          <DateTimeInput
            value={start}
            placeholder="Start date and time"
            onChange={(value) => onChange(value, "start")}
          />
          <div className={s.text}>to</div>
          <DateTimeInput
            value={end}
            placeholder="End date and time"
            onChange={(value) => onChange(value, "end")}
          />
        </div>
        {isInvalid && (
          <div className={s.error}>
            Invalid time range. Please check the dates.
          </div>
        )}
      </div>
    );
  },
);
