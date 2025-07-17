import type { TimeRange } from "../../../../types/types.ts";
import s from "./commonlyUsed.module.css";
import { memo } from "react";

type Props = {
  items: { display: string; timeRange: TimeRange }[];
  onCommonlyUsed: (range: TimeRange) => void;
};

export const CommonlyUsed = memo(({ items, onCommonlyUsed }: Props) => (
  <div className={s.commonlyUsed}>
    <h4 className={s.sectionTitle}>Commonly used</h4>
    <div className={s.commonlyUsedGrid}>
      {items.map((item, i) => (
        <button
          key={i}
          className={s.commonlyUsedItem}
          onClick={() => onCommonlyUsed(item.timeRange)}
        >
          {item.display}
        </button>
      ))}
    </div>
  </div>
));
