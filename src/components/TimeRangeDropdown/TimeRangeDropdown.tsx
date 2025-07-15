import { CommonlyUsedPanel } from "./CommonlyUsedPanel/CommonlyUsedPanel.tsx";
import { RecentlyUsedPanel } from "./RecentlyUsedPanel/RecentlyUsedPanel.tsx";
import { ManualInputPanel } from "./ManualInputPanel/ManualInputPanel.tsx";
import type { TimeRange } from "../../types/types.ts";
import { CustomContent } from "./CustomContent/CustomContent.tsx";
import s from "./TimeRangeDropdown.module.css";

type Props = {
  commonlyUsedItems: { display: string; timeRange: TimeRange }[];
  recentlyUsed: TimeRange[];
  localStart: string;
  localEnd: string;
  isInvalid: boolean;
  onCommonlyUsed: (range: TimeRange) => void;
  onDateTimeChange: (value: string, type: "start" | "end") => void;
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  showCustomContent?: boolean;
  compactInputs?: boolean;
};

export const TimeRangeDropdown = ({
  commonlyUsedItems,
  recentlyUsed,
  localStart,
  localEnd,
  isInvalid,
  onCommonlyUsed,
  onDateTimeChange,
  showCommonlyUsed,
  showRecentlyUsed,
  showManualInput,
  showCustomContent,
  compactInputs,
}: Props) => {
  return (
    <div className={`${s.dropdown} ${compactInputs ? s.compact : ""}`}>
      {showCustomContent && <CustomContent />}

      {showCommonlyUsed && (
        <CommonlyUsedPanel
          items={commonlyUsedItems}
          onCommonlyUsed={onCommonlyUsed}
        />
      )}

      {showRecentlyUsed && recentlyUsed.length > 0 && (
        <RecentlyUsedPanel items={recentlyUsed} onSelect={onCommonlyUsed} />
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
