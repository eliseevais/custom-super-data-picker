import s from "./SwitchControls.module.css";
import { SwitchToggle } from "./SwitchToggle/SwitchToggle";

type Props = {
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  setShowCommonlyUsed: (value: boolean) => void;
  setShowRecentlyUsed: (value: boolean) => void;
  setShowManualInput: (value: boolean) => void;

  showRefreshButton: boolean;
  setShowRefreshButton: (value: boolean) => void;
  refreshFilled: boolean;
  setRefreshFilled: (value: boolean) => void;
  refreshIconOnly: boolean;
  setRefreshIconOnly: (value: boolean) => void;
};

export const SwitchControls = ({
  showCommonlyUsed,
  showRecentlyUsed,
  showManualInput,
  setShowCommonlyUsed,
  setShowRecentlyUsed,
  setShowManualInput,

  showRefreshButton,
  setShowRefreshButton,
  refreshFilled,
  setRefreshFilled,
  refreshIconOnly,
  setRefreshIconOnly,
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
          label="Recently Used"
          checked={showRecentlyUsed}
          onChange={() => setShowRecentlyUsed(!showRecentlyUsed)}
        />
        <SwitchToggle
          label="Manual Input"
          checked={showManualInput}
          onChange={() => setShowManualInput(!showManualInput)}
        />
      </fieldset>

      <fieldset className={s.controlGroup}>
        <legend>Refresh Button</legend>
        <SwitchToggle
          label="Show Refresh Button"
          checked={showRefreshButton}
          onChange={() => setShowRefreshButton(!showRefreshButton)}
        />
        <SwitchToggle
          label="Refresh Button Filled"
          checked={refreshFilled}
          onChange={() => setRefreshFilled(!refreshFilled)}
        />
        <SwitchToggle
          label="Refresh Icon Only"
          checked={refreshIconOnly}
          onChange={() => setRefreshIconOnly(!refreshIconOnly)}
        />
      </fieldset>
    </div>
  );
};
