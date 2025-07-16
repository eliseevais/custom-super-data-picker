import { SwitchToggle } from "./SwitchToggle/SwitchToggle";
import { WidthSelector } from "../WidthSelector/WidthSelector.tsx";
import type { WidthMode } from "../../types/types.ts";
import s from "./SwitchControls.module.css";

type Props = {
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  setShowCommonlyUsed: (value: boolean) => void;
  setShowRecentlyUsed: (value: boolean) => void;
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
};

export const SwitchControls = ({
  showCommonlyUsed,
  showRecentlyUsed,
  showManualInput,
  setShowCommonlyUsed,
  setShowRecentlyUsed,
  setShowManualInput,

  showCustomContent,
  setShowCustomContent,

  showRefreshButton,
  setShowRefreshButton,
  refreshFilled,
  setRefreshFilled,
  refreshIconOnly,
  setRefreshIconOnly,

  compactInputs,
  setCompactInputs,

  inputLineWidthMode,
  setInputLineWidthMode,
}: Props) => {
  return (
    <div className={s.switchControls}>
      <fieldset className={s.controlGroup}>
        <legend>Time Settings</legend>
        <SwitchToggle
          label="Commonly used"
          checked={showCommonlyUsed}
          onChange={() => setShowCommonlyUsed(!showCommonlyUsed)}
        />
        <SwitchToggle
          label="Recently used"
          checked={showRecentlyUsed}
          onChange={() => setShowRecentlyUsed(!showRecentlyUsed)}
        />
        <SwitchToggle
          label="Manual input"
          checked={showManualInput}
          onChange={() => setShowManualInput(!showManualInput)}
        />
        <SwitchToggle
          label="Show custom content"
          checked={showCustomContent}
          onChange={() => setShowCustomContent(!showCustomContent)}
        />
      </fieldset>

      <fieldset className={s.controlGroup}>
        <legend>Refresh Button</legend>
        <SwitchToggle
          label="Show refresh button"
          checked={showRefreshButton}
          onChange={() => setShowRefreshButton(!showRefreshButton)}
        />
        <SwitchToggle
          label="Refresh button filled"
          checked={refreshFilled}
          onChange={() => setRefreshFilled(!refreshFilled)}
        />
        <SwitchToggle
          label="Refresh icon only"
          checked={refreshIconOnly}
          onChange={() => setRefreshIconOnly(!refreshIconOnly)}
        />
      </fieldset>

      <fieldset className={s.controlGroup}>
        <legend>Display</legend>
        <SwitchToggle
          label="Compress"
          checked={compactInputs}
          onChange={() => setCompactInputs(!compactInputs)}
        />

        <WidthSelector
          value={inputLineWidthMode}
          onChange={setInputLineWidthMode}
        />
      </fieldset>
    </div>
  );
};
