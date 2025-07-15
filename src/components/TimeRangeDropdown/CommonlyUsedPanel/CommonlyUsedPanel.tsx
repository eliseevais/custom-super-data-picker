import s from "./CommonlyUsedPanel.module.css";
import type { TimeRange } from "../../../types/types.ts";

type Props = {
  items: { display: string; timeRange: TimeRange }[];
  onCommonlyUsed: (range: TimeRange) => void;
};

export const CommonlyUsedPanel = ({ items, onCommonlyUsed }: Props) => (
  <div className={s.quickSelect}>
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
);
