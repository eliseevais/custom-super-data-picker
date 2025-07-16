import { useState, useEffect, useRef } from "react";
import { formatDisplayDate } from "../../utils/dateUtils";
import { constants } from "../../constants/constants";
import { useTimeRange } from "../../hooks/useTimeRange";
import { TimeRangeDropdown } from "../TimeRangeDropdown/TimeRangeDropdown";
import { SwitchControls } from "../SwitchControls/SwitchControls";
import { DateRangeDisplay } from "../DateRangeDisplay/DateRangeDisplay";
import { RefreshButton } from "../RefreshButton/RefreshButton";
import type { WidthMode } from "../../types/types.ts";
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
  const [inputLineWidthMode, setInputLineWidthMode] =
    useState<WidthMode>("full");

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

  useEffect(() => {
    if (!isAutoRefreshOn || refreshInterval <= 0) {
      return;
    }

    const id = setInterval(() => {
      if (!isInvalid) {
        refreshRef.current(() => setIsOpen(false));
      }
    }, refreshInterval);

    return () => clearInterval(id);
  }, [isAutoRefreshOn, refreshInterval, isInvalid]);

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
        inputLineWidthMode={inputLineWidthMode}
        setInputLineWidthMode={setInputLineWidthMode}
        isAutoRefreshOn={isAutoRefreshOn}
        setIsAutoRefreshOn={setIsAutoRefreshOn}
        refreshInterval={refreshInterval}
        setRefreshInterval={setRefreshInterval}
      />

      <div className={s.inputLineAndRefreshButton}>
        <DateRangeDisplay
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
