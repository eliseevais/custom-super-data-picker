import { CommonlyUsed } from "./panels/commonlyUsed";
import { CustomContent } from "./panels/customContent";
import { ManualInput } from "./panels/manualInput";
import { RecentlyUsed } from "./panels/recentlyUsed";
import type { TimeRange, TimeType } from "../../types/types.ts";
import s from "./dropdownMenu.module.css";
import { memo } from "react";

type Props = {
  commonlyUsedItems: { display: string; timeRange: TimeRange }[];
  recentlyUsed: TimeRange[];
  localStart: string;
  localEnd: string;
  isInvalid: boolean;
  onCommonlyUsed: (range: TimeRange) => void;
  onDateTimeChange: (value: string, type: TimeType) => void;
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  showCustomContent?: boolean;
  compactInputs?: boolean;
};

export const DropdownMenu = memo(
  ({
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
          <CommonlyUsed
            items={commonlyUsedItems}
            onCommonlyUsed={onCommonlyUsed}
          />
        )}
        {showRecentlyUsed && recentlyUsed.length > 0 && (
          <RecentlyUsed items={recentlyUsed} onSelect={onCommonlyUsed} />
        )}
        {showManualInput && (
          <ManualInput
            start={localStart}
            end={localEnd}
            isInvalid={isInvalid}
            onChange={onDateTimeChange}
            compact={compactInputs}
          />
        )}
      </div>
    );
  },
);
