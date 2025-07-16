import { SwitchToggle } from "../switchToggle";
import { WidthSelector } from "../widthSelector";
import type { WidthMode } from "../../../types/types";
import s from "./displaySettings.module.css";

type Props = {
  compactInputs: boolean;
  setCompactInputs: (val: boolean) => void;
  inputLineWidthMode: WidthMode;
  setInputLineWidthMode: (val: WidthMode) => void;
};

export const DisplaySettings = ({
  compactInputs,
  setCompactInputs,
  inputLineWidthMode,
  setInputLineWidthMode,
}: Props) => (
  <fieldset className={s.controlGroup}>
    <legend className={s.legend}>Display</legend>
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
);
