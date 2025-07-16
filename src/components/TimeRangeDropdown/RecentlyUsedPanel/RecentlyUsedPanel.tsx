import { formatDisplayDate } from "../../../utils/dateUtils.ts";
import type { TimeRange } from "../../../types/types.ts";
import s from "./RecentlyUsedPanel.module.css";

type Props = {
  items: TimeRange[];
  onSelect: (range: TimeRange) => void;
};

export const RecentlyUsedPanel = ({ items, onSelect }: Props) => {
  if (items.length === 0) return null;

  return (
    <div className={s.recentlyUsed}>
      <h4 className={s.sectionTitle}>Recently used</h4>
      <div className={s.recentlyUsedList}>
        {items.map((range, i) => (
          <button
            key={i}
            className={s.recentlyUsedItem}
            onClick={() => onSelect(range)}
          >
            {formatDisplayDate(range.start)} → {formatDisplayDate(range.end)}
          </button>
        ))}
      </div>
    </div>
  );
};
