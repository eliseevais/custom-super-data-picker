import { useEffect, useReducer, useRef, useState } from "react";
import { initialState, reducer } from "../../reducer/reducer.ts";
import { constants } from "../../constants/constants";
import { useAutoRefresh } from "../../hooks";
import { useTimeRange } from "../../hooks";
import { formatDisplayDate } from "../../utils";
import { DateRangeMainDisplay } from "../dateRangeMainDisplay";
import { DropdownMenu } from "../dropdownMenu";
import { RefreshButton } from "../refreshButton";
import { SwitchControls } from "../switchControlsPanel";
import s from "./SuperDataPicker.module.css";

export const SuperDataPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

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
    state.isAutoRefreshOn,
    state.refreshInterval,
    isInvalid,
  );

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>

      <SwitchControls state={state} dispatch={dispatch} />

      <div className={s.inputLineAndRefreshButton}>
        <DateRangeMainDisplay
          start={formatDisplayDate(timeRange.start)}
          end={formatDisplayDate(timeRange.end)}
          onClick={() => setIsOpen(!isOpen)}
          compact={state.compactInputs}
          widthMode={state.inputLineWidthMode}
        />

        {state.showRefreshButton && (
          <RefreshButton
            disabled={isInvalid}
            onClick={() => !isInvalid && handleApply(closeDropdown)}
            filled={state.refreshFilled}
            iconOnly={state.refreshIconOnly}
            compact={state.compactInputs}
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
          showCommonlyUsed={state.showCommonlyUsed}
          showRecentlyUsed={state.showRecentlyUsed}
          showManualInput={state.showManualInput}
          showCustomContent={state.showCustomContent}
          compactInputs={state.compactInputs}
        />
      )}
    </div>
  );
};
