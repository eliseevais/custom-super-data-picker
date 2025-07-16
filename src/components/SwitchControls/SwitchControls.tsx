import { SwitchToggle } from "./SwitchToggle/SwitchToggle";
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

  inputLineWidthMode: "restricted" | "full" | "auto";
  setInputLineWidthMode: (value: "restricted" | "full" | "auto") => void;
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
          label="Compact inputs"
          checked={compactInputs}
          onChange={() => setCompactInputs(!compactInputs)}
        />

        <div className={s.selectWrapper}>
          <span className={s.selectLabel}>Width: </span>
          <select
            value={inputLineWidthMode}
            onChange={(e) =>
              setInputLineWidthMode(
                e.target.value as "restricted" | "full" | "auto",
              )
            }
          >
            <option value="restricted">Restricted (368px)</option>
            <option value="full">Full Width (100%)</option>
            <option value="auto">Auto Width</option>
          </select>
        </div>
      </fieldset>
    </div>
  );
};
