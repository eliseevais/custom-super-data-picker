import { useState } from "react";
import { formatDisplayDate } from "../../utils/dateUtils";
import { constants } from "../../constants/constants";
import { useTimeRange } from "../../hooks/useTimeRange";
import { TimeRangeDropdown } from "../TimeRangeDropdown/TimeRangeDropdown";
import { SwitchControls } from "../SwitchControls/SwitchControls";
import { DateRangeDisplay } from "../DateRangeDisplay/DateRangeDisplay";
import { RefreshButton } from "../RefreshButton/RefreshButton";
import s from "./SuperDataPicker.module.css";

export const SuperDataPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showCommonlyUsed, setShowCommonlyUsed] = useState(true);
  const [showRecentlyUsed, setShowRecentlyUsed] = useState(true);
  const [showManualInput, setShowManualInput] = useState(true);

  const [showCustomContent, setShowCustomContent] = useState(false);

  const [showRefreshButton, setShowRefreshButton] = useState(true);
  const [refreshFilled, setRefreshFilled] = useState(true);
  const [refreshIconOnly, setRefreshIconOnly] = useState(false);

  const [compactInputs, setCompactInputs] = useState(false);

  const {
    timeRange,
    recentlyUsed,
    localStart,
    localEnd,
    isInvalid,
    handleCommonlyUsed,
    handleApply,
    handleDateTimeChange,
  } = useTimeRange({ start: "now-1h", end: "now" });

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>

      <SwitchControls
        showCommonlyUsed={showCommonlyUsed}
        setShowCommonlyUsed={setShowCommonlyUsed}
        showRecentlyUsed={showRecentlyUsed}
        setShowRecentlyUsed={setShowRecentlyUsed}
        showManualInput={showManualInput}
        setShowManualInput={setShowManualInput}
        showCustomContent={showCustomContent}
        setShowCustomContent={setShowCustomContent}
        showRefreshButton={showRefreshButton}
        setShowRefreshButton={setShowRefreshButton}
        refreshFilled={refreshFilled}
        setRefreshFilled={setRefreshFilled}
        refreshIconOnly={refreshIconOnly}
        setRefreshIconOnly={setRefreshIconOnly}
        compactInputs={compactInputs}
        setCompactInputs={setCompactInputs}
      />

      <div className={s.inputLineAndRefreshButton}>
        <DateRangeDisplay
          start={formatDisplayDate(timeRange.start)}
          end={formatDisplayDate(timeRange.end)}
          onClick={() => setIsOpen(!isOpen)}
        />

        {showRefreshButton && (
          <RefreshButton
            disabled={isInvalid}
            onClick={() => !isInvalid && handleApply(closeDropdown)}
            filled={refreshFilled}
            iconOnly={refreshIconOnly}
          />
        )}
      </div>

      {isOpen && (
        <TimeRangeDropdown
          commonlyUsedItems={constants}
          recentlyUsed={recentlyUsed}
          localStart={localStart}
          localEnd={localEnd}
          isInvalid={isInvalid}
          onCommonlyUsed={handleCommonlyUsed}
          onDateTimeChange={handleDateTimeChange}
          showCommonlyUsed={showCommonlyUsed}
          showRecentlyUsed={showRecentlyUsed}
          showManualInput={showManualInput}
          showCustomContent={showCustomContent}
          compactInputs={compactInputs}
        />
      )}
    </div>
  );
};
