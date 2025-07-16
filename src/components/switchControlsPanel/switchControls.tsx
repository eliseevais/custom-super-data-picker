import s from "./switchControls.module.css";
import { AutoRefreshToggle } from "./autoRefreshToggle";
import {
  DisplaySettings,
  RefreshButtonSettings,
  TimeSettings,
} from "./settingsGroups";
import type { WidthMode } from "../../types/types.ts";

export type Props = {
  timeSettings: {
    showCommonlyUsed: boolean;
    setShowCommonlyUsed: (value: boolean) => void;
    showRecentlyUsed: boolean;
    setShowRecentlyUsed: (value: boolean) => void;
    showManualInput: boolean;
    setShowManualInput: (value: boolean) => void;
    showCustomContent: boolean;
    setShowCustomContent: (value: boolean) => void;
  };

  refreshSettings: {
    showRefreshButton: boolean;
    setShowRefreshButton: (value: boolean) => void;
    refreshFilled: boolean;
    setRefreshFilled: (value: boolean) => void;
    refreshIconOnly: boolean;
    setRefreshIconOnly: (value: boolean) => void;
  };

  displaySettings: {
    compactInputs: boolean;
    setCompactInputs: (value: boolean) => void;
    inputLineWidthMode: WidthMode;
    setInputLineWidthMode: (value: WidthMode) => void;
  };

  autoRefreshSettings: {
    isAutoRefreshOn: boolean;
    setIsAutoRefreshOn: (value: boolean) => void;
    refreshInterval: number;
    setRefreshInterval: (value: number) => void;
  };
};

export const SwitchControls = (props: Props) => {
  return (
    <div className={s.switchControls}>
      <TimeSettings
        showCommonlyUsed={props.timeSettings.showCommonlyUsed}
        setShowCommonlyUsed={props.timeSettings.setShowCommonlyUsed}
        showRecentlyUsed={props.timeSettings.showRecentlyUsed}
        setShowRecentlyUsed={props.timeSettings.setShowRecentlyUsed}
        showManualInput={props.timeSettings.showManualInput}
        setShowManualInput={props.timeSettings.setShowManualInput}
        showCustomContent={props.timeSettings.showCustomContent}
        setShowCustomContent={props.timeSettings.setShowCustomContent}
      />

      <RefreshButtonSettings
        showRefreshButton={props.refreshSettings.showRefreshButton}
        setShowRefreshButton={props.refreshSettings.setShowRefreshButton}
        refreshFilled={props.refreshSettings.refreshFilled}
        setRefreshFilled={props.refreshSettings.setRefreshFilled}
        refreshIconOnly={props.refreshSettings.refreshIconOnly}
        setRefreshIconOnly={props.refreshSettings.setRefreshIconOnly}
      />

      <DisplaySettings
        compactInputs={props.displaySettings.compactInputs}
        setCompactInputs={props.displaySettings.setCompactInputs}
        inputLineWidthMode={props.displaySettings.inputLineWidthMode}
        setInputLineWidthMode={props.displaySettings.setInputLineWidthMode}
      />

      <AutoRefreshToggle
        isAutoRefreshOn={props.autoRefreshSettings.isAutoRefreshOn}
        setIsAutoRefreshOn={props.autoRefreshSettings.setIsAutoRefreshOn}
        refreshInterval={props.autoRefreshSettings.refreshInterval}
        setRefreshInterval={props.autoRefreshSettings.setRefreshInterval}
      />
    </div>
  );
};
