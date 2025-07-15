import s from "./TimeRangeDropdown.module.css";
import { QuickSelectPanel } from "./QuickSelectPanel/QuickSelectPanel.tsx";
import { RecentlyUsedPanel } from "./RecentlyUsedPanel/RecentlyUsedPanel.tsx";
import { ManualInputPanel } from "./ManualInputPanel/ManualInputPanel.tsx";
import type { TimeRange } from "../../types/types.ts";

type Props = {
  quickSelectItems: { display: string; timeRange: TimeRange }[];
  recentlyUsed: TimeRange[];
  localStart: string;
  localEnd: string;
  isInvalid: boolean;
  onQuickSelect: (range: TimeRange) => void;
  onDateTimeChange: (value: string, type: "start" | "end") => void;
  showQuickSelect: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
};

export const TimeRangeDropdown = ({
  quickSelectItems,
  recentlyUsed,
  localStart,
  localEnd,
  isInvalid,
  onQuickSelect,
  onDateTimeChange,
  showQuickSelect,
  showRecentlyUsed,
  showManualInput,
}: Props) => {
  return (
    <div className={s.dropdown}>
      {showQuickSelect && (
        <QuickSelectPanel items={quickSelectItems} onSelect={onQuickSelect} />
      )}

      {showRecentlyUsed && recentlyUsed.length > 0 && (
        <RecentlyUsedPanel items={recentlyUsed} onSelect={onQuickSelect} />
      )}

      {showManualInput && (
        <ManualInputPanel
          start={localStart}
          end={localEnd}
          isInvalid={isInvalid}
          onChange={onDateTimeChange}
        />
      )}
    </div>
  );
};
