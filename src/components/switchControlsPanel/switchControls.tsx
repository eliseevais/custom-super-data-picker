import { type Dispatch, memo } from "react";
import { AutoRefreshToggle } from "./autoRefreshToggle";
import {
  DisplaySettings,
  RefreshButtonSettings,
  TimeSettings,
} from "./settingsGroups";
import s from "./switchControls.module.css";
import type { Action, State } from "../../types/types.ts";

type Props = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const SwitchControls = memo(({ state, dispatch }: Props) => {
  return (
    <div className={s.switchControls}>
      <TimeSettings state={state} dispatch={dispatch} />
      <RefreshButtonSettings state={state} dispatch={dispatch} />
      <DisplaySettings state={state} dispatch={dispatch} />
      <AutoRefreshToggle state={state} dispatch={dispatch} />
    </div>
  );
});
