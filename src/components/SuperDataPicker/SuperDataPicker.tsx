import { useEffect, useRef, useState } from "react";
import { constants } from "../../constants/constants";
import { useAutoRefresh } from "../../hooks/useAutoRefresh.ts";
import { useTimeRange } from "../../hooks/useTimeRange";
import { formatDisplayDate } from "../../utils/dateUtils";
import { DateRangeMainDisplay } from "../dateRangeMainDisplay";
import { DropdownMenu } from "../dropdownMenu";
import { RefreshButton } from "../refreshButton";
import { SwitchControls } from "../switchControlsPanel";
import type { WidthMode } from "../../types/types.ts";
import s from "./SuperDataPicker.module.css";

export const SuperDataPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  /** Time settings */
  const [showCommonlyUsed, setShowCommonlyUsed] = useState(true);
  const [showRecentlyUsed, setShowRecentlyUsed] = useState(true);
  const [showManualInput, setShowManualInput] = useState(true);
  const [showCustomContent, setShowCustomContent] = useState(false);

  /** Refresh settings */
  const [showRefreshButton, setShowRefreshButton] = useState(true);
  const [refreshFilled, setRefreshFilled] = useState(true);
  const [refreshIconOnly, setRefreshIconOnly] = useState(false);

  /** Display settings */
  const [compactInputs, setCompactInputs] = useState(false);
  const [inputLineWidthMode, setInputLineWidthMode] =
    useState<WidthMode>("full");

  /** Auto-refresh settings */
  const [isAutoRefreshOn, setIsAutoRefreshOn] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(5000);

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

  const refreshRef = useRef(handleApply);

  useEffect(() => {
    refreshRef.current = handleApply;
  }, [handleApply]);

  useAutoRefresh(
    () => handleApply(() => setIsOpen(false)),
    isAutoRefreshOn,
    refreshInterval,
    isInvalid,
  );

  const closeDropdown = () => setIsOpen(false);

  /** Grouped props */
  const timeSettings = {
    showCommonlyUsed,
    setShowCommonlyUsed,
    showRecentlyUsed,
    setShowRecentlyUsed,
    showManualInput,
    setShowManualInput,
    showCustomContent,
    setShowCustomContent,
  };

  const refreshSettings = {
    showRefreshButton,
    setShowRefreshButton,
    refreshFilled,
    setRefreshFilled,
    refreshIconOnly,
    setRefreshIconOnly,
  };

  const displaySettings = {
    compactInputs,
    setCompactInputs,
    inputLineWidthMode,
    setInputLineWidthMode,
  };

  const autoRefreshSettings = {
    isAutoRefreshOn,
    setIsAutoRefreshOn,
    refreshInterval,
    setRefreshInterval,
  };

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>

      <SwitchControls
        timeSettings={timeSettings}
        refreshSettings={refreshSettings}
        displaySettings={displaySettings}
        autoRefreshSettings={autoRefreshSettings}
      />

      <div className={s.inputLineAndRefreshButton}>
        <DateRangeMainDisplay
          start={formatDisplayDate(timeRange.start)}
          end={formatDisplayDate(timeRange.end)}
          onClick={() => setIsOpen(!isOpen)}
          compact={compactInputs}
          widthMode={inputLineWidthMode}
        />

        {showRefreshButton && (
          <RefreshButton
            disabled={isInvalid}
            onClick={() => !isInvalid && handleApply(closeDropdown)}
            filled={refreshFilled}
            iconOnly={refreshIconOnly}
            compact={compactInputs}
          />
        )}
      </div>

      {isOpen && (
        <DropdownMenu
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
