import { type ChangeEvent, type Dispatch, memo, useCallback } from "react";
import { SwitchToggle } from "../switchToggle";
import s from "./autoRefreshToggle.module.css";
import {
  TOGGLE_AUTO_REFRESH,
  SET_REFRESH_INTERVAL,
  type Action,
  type State,
} from "../../../types/types.ts";

type Props = {
  state: Pick<State, "isAutoRefreshOn" | "refreshInterval">;
  dispatch: Dispatch<Action>;
};

export const AutoRefreshToggle = memo(({ state, dispatch }: Props) => {
  const { isAutoRefreshOn, refreshInterval } = state;
  const intervalSeconds = refreshInterval / 1000;

  const handleToggleAutoRefresh = useCallback(
    () => dispatch({ type: TOGGLE_AUTO_REFRESH }),
    [dispatch],
  );

  const handleIntervalChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const seconds = Number(e.target.value);
      if (!isNaN(seconds) && seconds >= 1) {
        dispatch({
          type: SET_REFRESH_INTERVAL,
          payload: seconds * 1000,
        });
      }
    },
    [dispatch],
  );

  return (
    <fieldset className={s.controlGroup}>
      <legend>Auto Refresh</legend>
      <SwitchToggle
        label="Enable auto refresh"
        checked={isAutoRefreshOn}
        onChange={handleToggleAutoRefresh}
      />
      <label className={s.intervalWrapper}>
        <span className={s.intervalLabel}>Interval (sec):</span>
        <input
          type="number"
          min={1}
          step={1}
          value={intervalSeconds}
          disabled={!isAutoRefreshOn}
          onChange={handleIntervalChange}
          className={s.inputInterval}
        />
      </label>
    </fieldset>
  );
});
