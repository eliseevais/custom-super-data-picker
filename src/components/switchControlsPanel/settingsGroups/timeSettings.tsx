import { SwitchToggle } from "../switchToggle";
import s from "./timeSettings.module.css";
import {
  type Action,
  type State,
  TOGGLE_COMMONLY_USED,
  TOGGLE_CUSTOM_CONTENT,
  TOGGLE_MANUAL_INPUT,
  TOGGLE_RECENTLY_USED,
} from "../../../types/types.ts";
import { type Dispatch, memo } from "react";

type Props = {
  state: Pick<
    State,
    | "showCommonlyUsed"
    | "showRecentlyUsed"
    | "showManualInput"
    | "showCustomContent"
  >;
  dispatch: Dispatch<Action>;
};

export const TimeSettings = memo(({ state, dispatch }: Props) => {
  const {
    showCommonlyUsed,
    showRecentlyUsed,
    showManualInput,
    showCustomContent,
  } = state;

  const handlers = {
    toggleCommonlyUsed: () => dispatch({ type: TOGGLE_COMMONLY_USED }),
    toggleRecentlyUsed: () => dispatch({ type: TOGGLE_RECENTLY_USED }),
    toggleManualInput: () => dispatch({ type: TOGGLE_MANUAL_INPUT }),
    toggleCustomContent: () => dispatch({ type: TOGGLE_CUSTOM_CONTENT }),
  };

  return (
    <fieldset className={s.controlGroup}>
      <legend className={s.legend}>Time Settings</legend>
      <SwitchToggle
        label="Commonly used"
        checked={showCommonlyUsed}
        onChange={handlers.toggleCommonlyUsed}
      />
      <SwitchToggle
        label="Recently used"
        checked={showRecentlyUsed}
        onChange={handlers.toggleRecentlyUsed}
      />
      <SwitchToggle
        label="Manual input"
        checked={showManualInput}
        onChange={handlers.toggleManualInput}
      />
      <SwitchToggle
        label="Show custom content"
        checked={showCustomContent}
        onChange={handlers.toggleCustomContent}
      />
    </fieldset>
  );
});
