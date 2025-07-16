import s from "./switchControls.module.css";
import { AutoRefreshToggle } from "./autoRefreshToggle";
import {
  DisplaySettings,
  RefreshButtonSettings,
  TimeSettings,
} from "./settingsGroups";
import type { WidthMode } from "../../types/types.ts";

export type Props = {
  showCommonlyUsed: boolean;
  setShowCommonlyUsed: (value: boolean) => void;
  showRecentlyUsed: boolean;
  setShowRecentlyUsed: (value: boolean) => void;
  showManualInput: boolean;
  setShowManualInput: (value: boolean) => void;
  showCustomContent: boolean;
  setShowCustomContent: (value: boolean) => void;

  showRefreshButton: boolean;
  setShowRefreshButton: (value: boolean) => void;
  refreshFilled: boolean;
  setRefreshFilled: (value: boolean) => void;
  refreshIconOnly: boolean;
  setRefreshIconOnly: (value: boolean) => void;

  compactInputs: boolean;
  setCompactInputs: (value: boolean) => void;
  inputLineWidthMode: WidthMode;
  setInputLineWidthMode: (value: WidthMode) => void;

  isAutoRefreshOn: boolean;
  setIsAutoRefreshOn: (value: boolean) => void;
  refreshInterval: number;
  setRefreshInterval: (value: number) => void;
};

export const SwitchControls = (props: Props) => {
  return (
    <div className={s.switchControls}>
      <TimeSettings
        showCommonlyUsed={props.showCommonlyUsed}
        showRecentlyUsed={props.showRecentlyUsed}
        showManualInput={props.showManualInput}
        showCustomContent={props.showCustomContent}
        setShowCommonlyUsed={props.setShowCommonlyUsed}
        setShowRecentlyUsed={props.setShowRecentlyUsed}
        setShowManualInput={props.setShowManualInput}
        setShowCustomContent={props.setShowCustomContent}
      />

      <RefreshButtonSettings
        showRefreshButton={props.showRefreshButton}
        refreshFilled={props.refreshFilled}
        refreshIconOnly={props.refreshIconOnly}
        setShowRefreshButton={props.setShowRefreshButton}
        setRefreshFilled={props.setRefreshFilled}
        setRefreshIconOnly={props.setRefreshIconOnly}
      />

      <DisplaySettings
        compactInputs={props.compactInputs}
        setCompactInputs={props.setCompactInputs}
        inputLineWidthMode={props.inputLineWidthMode}
        setInputLineWidthMode={props.setInputLineWidthMode}
      />

      <AutoRefreshToggle
        isAutoRefreshOn={props.isAutoRefreshOn}
        setIsAutoRefreshOn={props.setIsAutoRefreshOn}
        refreshInterval={props.refreshInterval}
        setRefreshInterval={props.setRefreshInterval}
      />
    </div>
  );
};
