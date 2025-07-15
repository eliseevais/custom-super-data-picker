import type { TimeRange } from "../types/types.ts";

export const constants: { display: string; timeRange: TimeRange }[] = [
  { display: "Last 15 min", timeRange: { start: "now-15m", end: "now" } },
  { display: "Last 1 hour", timeRange: { start: "now-1h", end: "now" } },
  { display: "Last 24 hours", timeRange: { start: "now-24h", end: "now" } },
  { display: "Last 7 days", timeRange: { start: "now-7d", end: "now" } },

  { display: "Today", timeRange: { start: "now/d", end: "now" } },
  { display: "Yesterday", timeRange: { start: "now-1d/d", end: "now/d" } },

  { display: "This week", timeRange: { start: "now/w", end: "now" } },
  { display: "Week to date", timeRange: { start: "now/w", end: "now" } },

  { display: "This month", timeRange: { start: "now/M", end: "now" } },
  { display: "Month to date", timeRange: { start: "now/M", end: "now" } },

  { display: "This year", timeRange: { start: "now/y", end: "now" } },
  { display: "Year to date", timeRange: { start: "now/y", end: "now" } },
];
