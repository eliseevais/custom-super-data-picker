import s from './TimeRangeDropdown.module.css';
import type { TimeRange } from '../../types/types';
import {QuickSelectPanel} from "./QuickSelectPanel/QuickSelectPanel.tsx";
import {RecentlyUsedPanel} from "./RecentlyUsedPanel/RecentlyUsedPanel.tsx";
import {ManualInputPanel} from "./ManualInputPanel/ManualInputPanel.tsx";

type Props = {
  quickSelectItems: { display: string; timeRange: TimeRange }[];
  recentlyUsed: TimeRange[];
  localStart: string;
  localEnd: string;
  isInvalid: boolean;
  onQuickSelect: (range: TimeRange) => void;
  onDateTimeChange: (value: string, type: 'start' | 'end') => void;
};

export const TimeRangeDropdown = ({
                                              quickSelectItems,
                                              recentlyUsed,
                                              localStart,
                                              localEnd,
                                              isInvalid,
                                              onQuickSelect,
                                              onDateTimeChange,
                                            }: Props) => {
  return (
    <div className={s.dropdown}>
      <QuickSelectPanel items={quickSelectItems} onSelect={onQuickSelect} />
      <RecentlyUsedPanel items={recentlyUsed} onSelect={onQuickSelect} />
      <ManualInputPanel
        start={localStart}
        end={localEnd}
        isInvalid={isInvalid}
        onChange={onDateTimeChange}
      />
    </div>
  );
};

