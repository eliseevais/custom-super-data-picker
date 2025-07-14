import React, { useState } from 'react';
import s from './SuperDataPicker.module.css';
import { validateTimeRange, formatDisplayDate } from '../../utils/dateUtils';

export type TimeRange = {
  start: string;
  end: string;
};

const quickSelectItems: { display: string; timeRange: TimeRange }[] = [
  { display: 'Last 15 min', timeRange: { start: 'now-15m', end: 'now' } },
  { display: 'Last 1 hour', timeRange: { start: 'now-1h', end: 'now' } },
  { display: 'Last 24 hours', timeRange: { start: 'now-24h', end: 'now' } },
  { display: 'Last 7 days', timeRange: { start: 'now-7d', end: 'now' } },
];

const SuperDataPicker: React.FC = () => {

  const [timeRange, setTimeRange] = useState<TimeRange>({
    start: 'now-1h',
    end: 'now',
  });

  const [recentlyUsed, setRecentlyUsed] = useState<TimeRange[]>([
    { start: 'now-15m', end: 'now' },
    { start: 'now-1d', end: 'now' },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [localStart, setLocalStart] = useState(timeRange.start);
  const [localEnd, setLocalEnd] = useState(timeRange.end);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleTimeChange = (newRange: TimeRange) => {
    setTimeRange(newRange);
    setRecentlyUsed(prev => {
      const exists = prev.find(r => r.start === newRange.start && r.end === newRange.end);
      const updated = exists
        ? [newRange, ...prev.filter(r => r !== exists)]
        : [newRange, ...prev];
      return updated.slice(0, 5);
    });
  };

  const handleQuickSelect = (range: TimeRange) => {
    if (validateTimeRange(range.start, range.end)) {
      handleTimeChange(range);
      setLocalStart(range.start);
      setLocalEnd(range.end);
      setIsOpen(false);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleApply = () => {
    if (validateTimeRange(localStart, localEnd)) {
      handleTimeChange({ start: localStart, end: localEnd });
      setIsOpen(false);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleDateTimeChange = (value: string, type: 'start' | 'end') => {
    if (type === 'start') setLocalStart(value);
    else setLocalEnd(value);
    setIsInvalid(false);
  };

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>
      <button className={s.button} onClick={() => setIsOpen(!isOpen)}>
        {formatDisplayDate(timeRange.start)} → {formatDisplayDate(timeRange.end)}
      </button>

      {isOpen && (
        <div className={s.dropdown}>
          <div className={s.quickSelect}>
            <h4 className={s.sectionTitle}>Quick Select</h4>
            <div className={s.quickSelectGrid}>
              {quickSelectItems.map((item, i) => (
                <button
                  key={i}
                  className={s.quickSelectItem}
                  onClick={() => handleQuickSelect(item.timeRange)}
                >
                  {item.display}
                </button>
              ))}
            </div>
          </div>

          {recentlyUsed.length > 0 && (
            <div className={s.recentlyUsed}>
              <h4 className={s.sectionTitle}>Recently Used</h4>
              <div className={s.recentlyUsedList}>
                {recentlyUsed.map((range, i) => (
                  <button
                    key={i}
                    className={s.recentlyUsedItem}
                    onClick={() => handleQuickSelect(range)}
                  >
                    {formatDisplayDate(range.start)} → {formatDisplayDate(range.end)}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={s.absoluteTime}>
            <h4 className={s.sectionTitle}>Specify manually</h4>
            <div className={s.timeInputs}>
              <input
                type="datetime-local"
                value={localStart.startsWith('now') ? '' : localStart}
                onChange={e => handleDateTimeChange(e.target.value, 'start')}
                className={s.timeInput}
              />
              <span>to</span>
              <input
                type="datetime-local"
                value={localEnd.startsWith('now') ? '' : localEnd}
                onChange={e => handleDateTimeChange(e.target.value, 'end')}
                className={s.timeInput}
              />
            </div>
            {isInvalid && (
              <div className={s.error}>Invalid time range. Please check the dates.</div>
            )}
          </div>

          <button className={s.applyButton} onClick={handleApply} disabled={isInvalid}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default SuperDataPicker;
