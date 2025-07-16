import { AutoRefreshToggle } from "./autoRefreshToggle";
import {
  DisplaySettings,
  RefreshButtonSettings,
  TimeSettings,
} from "./settingsGroups";
import type { WidthMode } from "../../types/types.ts";
import s from "./switchControls.module.css";

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
  const {
    timeSettings: {
      showCommonlyUsed,
      setShowCommonlyUsed,
      showRecentlyUsed,
      setShowRecentlyUsed,
      showManualInput,
      setShowManualInput,
      showCustomContent,
      setShowCustomContent,
    },
    refreshSettings: {
      showRefreshButton,
      setShowRefreshButton,
      refreshFilled,
      setRefreshFilled,
      refreshIconOnly,
      setRefreshIconOnly,
    },
    displaySettings: {
      compactInputs,
      setCompactInputs,
      inputLineWidthMode,
      setInputLineWidthMode,
    },
    autoRefreshSettings: {
      isAutoRefreshOn,
      setIsAutoRefreshOn,
      refreshInterval,
      setRefreshInterval,
    },
  } = props;

  return (
    <div className={s.switchControls}>
      <TimeSettings
        showCommonlyUsed={showCommonlyUsed}
        setShowCommonlyUsed={setShowCommonlyUsed}
        showRecentlyUsed={showRecentlyUsed}
        setShowRecentlyUsed={setShowRecentlyUsed}
        showManualInput={showManualInput}
        setShowManualInput={setShowManualInput}
        showCustomContent={showCustomContent}
        setShowCustomContent={setShowCustomContent}
      />

      <RefreshButtonSettings
        showRefreshButton={showRefreshButton}
        setShowRefreshButton={setShowRefreshButton}
        refreshFilled={refreshFilled}
        setRefreshFilled={setRefreshFilled}
        refreshIconOnly={refreshIconOnly}
        setRefreshIconOnly={setRefreshIconOnly}
      />

      <DisplaySettings
        compactInputs={compactInputs}
        setCompactInputs={setCompactInputs}
        inputLineWidthMode={inputLineWidthMode}
        setInputLineWidthMode={setInputLineWidthMode}
      />

      <AutoRefreshToggle
        isAutoRefreshOn={isAutoRefreshOn}
        setIsAutoRefreshOn={setIsAutoRefreshOn}
        refreshInterval={refreshInterval}
        setRefreshInterval={setRefreshInterval}
      />
    </div>
  );
};
