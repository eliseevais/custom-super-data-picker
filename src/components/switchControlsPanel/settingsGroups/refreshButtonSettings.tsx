import { SwitchToggle } from "../switchToggle";
import s from "./refreshButtonSettings.module.css";
import {
  TOGGLE_SHOW_REFRESH_BUTTON,
  TOGGLE_REFRESH_FILLED,
  TOGGLE_REFRESH_ICON_ONLY,
  type Action,
} from "../../../types/types.ts";
import { type Dispatch, memo } from "react";

type Props = {
  state: {
    showRefreshButton: boolean;
    refreshFilled: boolean;
    refreshIconOnly: boolean;
  };
  dispatch: Dispatch<Action>;
};

export const RefreshButtonSettings = memo(({ state, dispatch }: Props) => {
  const { showRefreshButton, refreshFilled, refreshIconOnly } = state;

  const handlers = {
    toggleShow: () => dispatch({ type: TOGGLE_SHOW_REFRESH_BUTTON }),
    toggleFilled: () => dispatch({ type: TOGGLE_REFRESH_FILLED }),
    toggleIconOnly: () => dispatch({ type: TOGGLE_REFRESH_ICON_ONLY }),
  };

  return (
    <fieldset className={s.controlGroup}>
      <legend className={s.legend}>Refresh Button</legend>
      <SwitchToggle
        label="Show refresh button"
        checked={showRefreshButton}
        onChange={handlers.toggleShow}
      />
      <SwitchToggle
        label="Refresh button filled"
        checked={refreshFilled}
        onChange={handlers.toggleFilled}
      />
      <SwitchToggle
        label="Refresh icon only"
        checked={refreshIconOnly}
        onChange={handlers.toggleIconOnly}
      />
    </fieldset>
  );
});
