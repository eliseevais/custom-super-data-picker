import s from "../switchControls.module.css";
import { SwitchToggle } from "../switchToggle";

type Props = {
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  showCustomContent: boolean;
  setShowCommonlyUsed: (value: boolean) => void;
  setShowRecentlyUsed: (value: boolean) => void;
  setShowManualInput: (value: boolean) => void;
  setShowCustomContent: (value: boolean) => void;
};

export const TimeSettings = ({ settings }: { settings: Props }) => (
  <fieldset className={s.controlGroup}>
    <legend>Time Settings</legend>
    <SwitchToggle
      label="Commonly used"
      checked={settings.showCommonlyUsed}
      onChange={() => settings.setShowCommonlyUsed(!settings.showCommonlyUsed)}
    />
    <SwitchToggle
      label="Recently used"
      checked={settings.showRecentlyUsed}
      onChange={() => settings.setShowRecentlyUsed(!settings.showRecentlyUsed)}
    />
    <SwitchToggle
      label="Manual input"
      checked={settings.showManualInput}
      onChange={() => settings.setShowManualInput(!settings.showManualInput)}
    />
    <SwitchToggle
      label="Show custom content"
      checked={settings.showCustomContent}
      onChange={() =>
        settings.setShowCustomContent(!settings.showCustomContent)
      }
    />
  </fieldset>
);
