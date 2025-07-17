import { reducer, initialState } from "./reducer";
import {
  TOGGLE_COMMONLY_USED,
  TOGGLE_RECENTLY_USED,
  TOGGLE_MANUAL_INPUT,
  TOGGLE_CUSTOM_CONTENT,
  TOGGLE_SHOW_REFRESH_BUTTON,
  TOGGLE_REFRESH_FILLED,
  TOGGLE_REFRESH_ICON_ONLY,
  TOGGLE_COMPACT_INPUTS,
  SET_INPUT_LINE_WIDTH_MODE,
  TOGGLE_AUTO_REFRESH,
  SET_REFRESH_INTERVAL,
  type Action,
} from "../types/types";

describe("reducer", () => {
  it("should return initial state for unknown action", () => {
    const unknownAction = { type: "UNKNOWN" } as unknown as Action;
    expect(reducer(initialState, unknownAction)).toEqual(initialState);
  });

  it("should return the same state object for unknown action", () => {
    const unknownAction = { type: "UNKNOWN" } as unknown as Action;
    const result = reducer(initialState, unknownAction);
    expect(result).toBe(initialState);
  });

  it.each([
    [TOGGLE_COMMONLY_USED, "showCommonlyUsed"],
    [TOGGLE_RECENTLY_USED, "showRecentlyUsed"],
    [TOGGLE_MANUAL_INPUT, "showManualInput"],
    [TOGGLE_CUSTOM_CONTENT, "showCustomContent"],
    [TOGGLE_SHOW_REFRESH_BUTTON, "showRefreshButton"],
    [TOGGLE_REFRESH_FILLED, "refreshFilled"],
    [TOGGLE_REFRESH_ICON_ONLY, "refreshIconOnly"],
    [TOGGLE_COMPACT_INPUTS, "compactInputs"],
    [TOGGLE_AUTO_REFRESH, "isAutoRefreshOn"],
  ])("should toggle %s without changing other fields", (actionType, field) => {
    const action = { type: actionType } as Extract<
      Action,
      { type: typeof actionType }
    >;
    const newState = reducer(initialState, action);

    // Проверяем, что нужное поле переключилось
    expect(newState[field as keyof typeof initialState]).toBe(
      !initialState[field as keyof typeof initialState],
    );

    // Проверяем, что остальные поля не изменились
    Object.entries(initialState).forEach(([key, value]) => {
      if (key !== field) {
        expect(newState[key as keyof typeof initialState]).toBe(value);
      }
    });
  });

  it("should toggle isAutoRefreshOn", () => {
    const action = { type: TOGGLE_AUTO_REFRESH } as Extract<
      Action,
      { type: typeof TOGGLE_AUTO_REFRESH }
    >;
    const newState = reducer(initialState, action);
    expect(newState.isAutoRefreshOn).toBe(!initialState.isAutoRefreshOn);
  });

  it("should set inputLineWidthMode", () => {
    const modes: Array<"restricted" | "full" | "auto"> = [
      "restricted",
      "auto",
      "full",
    ];
    modes.forEach((mode) => {
      const action = {
        type: SET_INPUT_LINE_WIDTH_MODE,
        payload: mode,
      } as Extract<Action, { type: typeof SET_INPUT_LINE_WIDTH_MODE }>;
      const newState = reducer(initialState, action);
      expect(newState.inputLineWidthMode).toBe(mode);
    });
  });

  it("should set inputLineWidthMode with any string payload", () => {
    const invalidMode = "invalid_mode" as any;
    const action = {
      type: SET_INPUT_LINE_WIDTH_MODE,
      payload: invalidMode,
    } as Extract<Action, { type: typeof SET_INPUT_LINE_WIDTH_MODE }>;
    const newState = reducer(initialState, action);
    expect(newState.inputLineWidthMode).toBe(invalidMode);
  });

  it("should set refreshInterval", () => {
    const intervals = [1000, 5000, 10000];
    intervals.forEach((interval) => {
      const action = {
        type: SET_REFRESH_INTERVAL,
        payload: interval,
      } as Extract<Action, { type: typeof SET_REFRESH_INTERVAL }>;
      const newState = reducer(initialState, action);
      expect(newState.refreshInterval).toBe(interval);
    });
  });

  it("should set refreshInterval even with edge values", () => {
    const intervals = [0, -100, 1000];
    intervals.forEach((interval) => {
      const action = {
        type: SET_REFRESH_INTERVAL,
        payload: interval,
      } as Extract<Action, { type: typeof SET_REFRESH_INTERVAL }>;
      const newState = reducer(initialState, action);
      expect(newState.refreshInterval).toBe(interval);
    });
  });

  it("should return current state for unknown action with modified state", () => {
    const unknownAction = { type: "UNKNOWN" } as unknown as Action;
    const modifiedState = { ...initialState, showCommonlyUsed: false };
    const result = reducer(modifiedState, unknownAction);
    expect(result).toBe(modifiedState);
  });
});
