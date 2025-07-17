import type { Action, State } from "../types/types.ts";
import {
  SET_INPUT_LINE_WIDTH_MODE,
  SET_REFRESH_INTERVAL,
  TOGGLE_AUTO_REFRESH,
  TOGGLE_COMMONLY_USED,
  TOGGLE_COMPACT_INPUTS,
  TOGGLE_CUSTOM_CONTENT,
  TOGGLE_MANUAL_INPUT,
  TOGGLE_RECENTLY_USED,
  TOGGLE_REFRESH_FILLED,
  TOGGLE_REFRESH_ICON_ONLY,
  TOGGLE_SHOW_REFRESH_BUTTON,
} from "../types/types.ts";

export const initialState: State = {
  showCommonlyUsed: true,
  showRecentlyUsed: true,
  showManualInput: true,
  showCustomContent: false,
  showRefreshButton: true,
  refreshFilled: true,
  refreshIconOnly: false,
  compactInputs: false,
  inputLineWidthMode: "full",
  isAutoRefreshOn: false,
  refreshInterval: 5000,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TOGGLE_COMMONLY_USED:
      return { ...state, showCommonlyUsed: !state.showCommonlyUsed };
    case TOGGLE_RECENTLY_USED:
      return { ...state, showRecentlyUsed: !state.showRecentlyUsed };
    case TOGGLE_MANUAL_INPUT:
      return { ...state, showManualInput: !state.showManualInput };
    case TOGGLE_CUSTOM_CONTENT:
      return { ...state, showCustomContent: !state.showCustomContent };
    case TOGGLE_SHOW_REFRESH_BUTTON:
      return { ...state, showRefreshButton: !state.showRefreshButton };
    case TOGGLE_REFRESH_FILLED:
      return { ...state, refreshFilled: !state.refreshFilled };
    case TOGGLE_REFRESH_ICON_ONLY:
      return { ...state, refreshIconOnly: !state.refreshIconOnly };
    case TOGGLE_COMPACT_INPUTS:
      return { ...state, compactInputs: !state.compactInputs };
    case SET_INPUT_LINE_WIDTH_MODE:
      return { ...state, inputLineWidthMode: action.payload };
    case TOGGLE_AUTO_REFRESH:
      return { ...state, isAutoRefreshOn: !state.isAutoRefreshOn };
    case SET_REFRESH_INTERVAL:
      return { ...state, refreshInterval: action.payload };
    default:
      return state;
  }
}
