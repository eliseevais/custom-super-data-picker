import { SwitchToggle } from "../switchToggle";
import { WidthSelector } from "../widthSelector";
import type { WidthMode } from "../../../types/types.ts";
import s from "../switchControls.module.css";

type Props = {
  compactInputs: boolean;
  inputLineWidthMode: WidthMode;
  setCompactInputs: (value: boolean) => void;
  setInputLineWidthMode: (value: WidthMode) => void;
};

export const DisplaySettings = ({ settings }: { settings: Props }) => (
  <fieldset className={s.controlGroup}>
    <legend>Display</legend>
    <SwitchToggle
      label="Compress"
      checked={settings.compactInputs}
      onChange={() => settings.setCompactInputs(!settings.compactInputs)}
    />
    <WidthSelector
      value={settings.inputLineWidthMode}
      onChange={settings.setInputLineWidthMode}
    />
  </fieldset>
);
