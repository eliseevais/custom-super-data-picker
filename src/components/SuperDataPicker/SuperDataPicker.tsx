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
  const [showQuickSelect, setShowQuickSelect] = useState(true);
  const [showRecentlyUsed, setShowRecentlyUsed] = useState(true);
  const [showManualInput, setShowManualInput] = useState(true);

  const [showRefreshButton, setShowRefreshButton] = useState(true);
  const [refreshFilled, setRefreshFilled] = useState(true);
  const [refreshIconOnly, setRefreshIconOnly] = useState(false);

  const {
    timeRange,
    recentlyUsed,
    localStart,
    localEnd,
    isInvalid,
    handleQuickSelect,
    handleApply,
    handleDateTimeChange,
  } = useTimeRange({ start: "now-1h", end: "now" });

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>

      <SwitchControls
        showQuickSelect={showQuickSelect}
        setShowQuickSelect={setShowQuickSelect}
        showRecentlyUsed={showRecentlyUsed}
        setShowRecentlyUsed={setShowRecentlyUsed}
        showManualInput={showManualInput}
        setShowManualInput={setShowManualInput}
        showRefreshButton={showRefreshButton}
        setShowRefreshButton={setShowRefreshButton}
        refreshFilled={refreshFilled}
        setRefreshFilled={setRefreshFilled}
        refreshIconOnly={refreshIconOnly}
        setRefreshIconOnly={setRefreshIconOnly}
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
          quickSelectItems={constants}
          recentlyUsed={recentlyUsed}
          localStart={localStart}
          localEnd={localEnd}
          isInvalid={isInvalid}
          onQuickSelect={handleQuickSelect}
          onDateTimeChange={handleDateTimeChange}
          showQuickSelect={showQuickSelect}
          showRecentlyUsed={showRecentlyUsed}
          showManualInput={showManualInput}
        />
      )}
    </div>
  );
};
