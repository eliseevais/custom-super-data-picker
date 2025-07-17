import { type Dispatch, memo } from "react";
import { SwitchToggle } from "../switchToggle";
import { WidthSelector } from "../widthSelector";
import s from "./displaySettings.module.css";
import {
  TOGGLE_COMPACT_INPUTS,
  SET_INPUT_LINE_WIDTH_MODE,
  type Action,
  type WidthMode,
} from "../../../types/types";

type Props = {
  state: {
    compactInputs: boolean;
    inputLineWidthMode: WidthMode;
  };
  dispatch: Dispatch<Action>;
};

export const DisplaySettings = memo(({ state, dispatch }: Props) => {
  const { compactInputs, inputLineWidthMode } = state;

  const handleToggleCompact = () => dispatch({ type: TOGGLE_COMPACT_INPUTS });

  const handleWidthModeChange = (mode: WidthMode) =>
    dispatch({
      type: SET_INPUT_LINE_WIDTH_MODE,
      payload: mode,
    });

  return (
    <fieldset className={s.controlGroup}>
      <legend className={s.legend}>Display</legend>
      <SwitchToggle
        label="Compress"
        checked={compactInputs}
        onChange={handleToggleCompact}
      />
      <WidthSelector
        value={inputLineWidthMode}
        onChange={handleWidthModeChange}
      />
    </fieldset>
  );
});
