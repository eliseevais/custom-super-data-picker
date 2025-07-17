// Action type constants
export const TOGGLE_COMMONLY_USED = "TOGGLE_COMMONLY_USED";
export const TOGGLE_RECENTLY_USED = "TOGGLE_RECENTLY_USED";
export const TOGGLE_MANUAL_INPUT = "TOGGLE_MANUAL_INPUT";
export const TOGGLE_CUSTOM_CONTENT = "TOGGLE_CUSTOM_CONTENT";

export const TOGGLE_SHOW_REFRESH_BUTTON = "TOGGLE_SHOW_REFRESH_BUTTON";
export const TOGGLE_REFRESH_FILLED = "TOGGLE_REFRESH_FILLED";
export const TOGGLE_REFRESH_ICON_ONLY = "TOGGLE_REFRESH_ICON_ONLY";

export const TOGGLE_COMPACT_INPUTS = "TOGGLE_COMPACT_INPUTS";
export const SET_INPUT_LINE_WIDTH_MODE = "SET_INPUT_LINE_WIDTH_MODE";

export const TOGGLE_AUTO_REFRESH = "TOGGLE_AUTO_REFRESH";
export const SET_REFRESH_INTERVAL = "SET_REFRESH_INTERVAL";

// Base types
export type TimeType = "start" | "end";

export type TimeRange = {
  start: string;
  end: string;
};

export type WidthMode = "restricted" | "full" | "auto";

// State
export type State = {
  showCommonlyUsed: boolean;
  showRecentlyUsed: boolean;
  showManualInput: boolean;
  showCustomContent: boolean;

  showRefreshButton: boolean;
  refreshFilled: boolean;
  refreshIconOnly: boolean;

  compactInputs: boolean;
  inputLineWidthMode: WidthMode;

  isAutoRefreshOn: boolean;
  refreshInterval: number;
};

// Actions
export type Action =
  | { type: typeof TOGGLE_COMMONLY_USED }
  | { type: typeof TOGGLE_RECENTLY_USED }
  | { type: typeof TOGGLE_MANUAL_INPUT }
  | { type: typeof TOGGLE_CUSTOM_CONTENT }
  | { type: typeof TOGGLE_SHOW_REFRESH_BUTTON }
  | { type: typeof TOGGLE_REFRESH_FILLED }
  | { type: typeof TOGGLE_REFRESH_ICON_ONLY }
  | { type: typeof TOGGLE_COMPACT_INPUTS }
  | { type: typeof SET_INPUT_LINE_WIDTH_MODE; payload: WidthMode }
  | { type: typeof TOGGLE_AUTO_REFRESH }
  | { type: typeof SET_REFRESH_INTERVAL; payload: number };
