import { SwitchToggle } from "../switchToggle";
import s from "./timeSettings.module.css";

type Props = {
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  showCustomContent: boolean;
  setShowCommonlyUsed: (val: boolean) => void;
  setShowRecentlyUsed: (val: boolean) => void;
  setShowManualInput: (val: boolean) => void;
  setShowCustomContent: (val: boolean) => void;
};

export const TimeSettings = ({
  showCommonlyUsed,
  showRecentlyUsed,
  showManualInput,
  showCustomContent,
  setShowCommonlyUsed,
  setShowRecentlyUsed,
  setShowManualInput,
  setShowCustomContent,
}: Props) => (
  <fieldset className={s.controlGroup}>
    <legend className={s.legend}>Time Settings</legend>
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
);
