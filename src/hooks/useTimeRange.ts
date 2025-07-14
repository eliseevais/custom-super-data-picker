import { useState } from 'react';
import { validateTimeRange } from '../utils/dateUtils';
import type { TimeRange } from "../types/types.ts";

export const useTimeRange = (initial: TimeRange) => {
  const [timeRange, setTimeRange] = useState<TimeRange>(initial);
  const [recentlyUsed, setRecentlyUsed] = useState<TimeRange[]>([
    { start: 'now-15m', end: 'now' },
    { start: 'now-1d', end: 'now' },
  ]);
  const [localStart, setLocalStart] = useState(initial.start);
  const [localEnd, setLocalEnd] = useState(initial.end);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleTimeChange = (newRange: TimeRange) => {
    setTimeRange(newRange);
    setRecentlyUsed(prev => {
      const exists = prev.find(r => r.start === newRange.start && r.end === newRange.end);
      const updated = exists
        ? [newRange, ...prev.filter(r => r !== exists)]
        : [newRange, ...prev];
      return updated.slice(0, 6);
    });
  };

  const handleQuickSelect = (range: TimeRange) => {
    if (validateTimeRange(range.start, range.end)) {
      handleTimeChange(range);
      setLocalStart(range.start);
      setLocalEnd(range.end);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleApply = (closeDropdown: () => void) => {
    if (validateTimeRange(localStart, localEnd)) {
      handleTimeChange({ start: localStart, end: localEnd });
      closeDropdown();
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleDateTimeChange = (value: string, type: 'start' | 'end') => {
    if (type === 'start') {
      setLocalStart(value);
    } else {
      setLocalEnd(value);
    }
    setIsInvalid(false);
  };

  return {
    timeRange,
    recentlyUsed,
    localStart,
    localEnd,
    isInvalid,
    handleQuickSelect,
    handleApply,
    handleDateTimeChange,
  };
};
