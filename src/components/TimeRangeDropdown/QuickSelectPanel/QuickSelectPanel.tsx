import s from "./QuickSelectPanel.module.css";
import type { TimeRange } from "../../../types/types.ts";

type Props = {
  items: { display: string; timeRange: TimeRange }[];
  onSelect: (range: TimeRange) => void;
};

export const QuickSelectPanel = ({ items, onSelect }: Props) => (
  <div className={s.quickSelect}>
    <h4 className={s.sectionTitle}>Quick Select</h4>
    <div className={s.quickSelectGrid}>
      {items.map((item, i) => (
        <button
          key={i}
          className={s.quickSelectItem}
          onClick={() => onSelect(item.timeRange)}
        >
          {item.display}
        </button>
      ))}
    </div>
  </div>
);
