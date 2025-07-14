import {useState} from 'react';
import s from './SuperDataPicker.module.css';
import {formatDisplayDate} from '../../utils/dateUtils';
import {constants} from '../../constants/constants';
import {useTimeRange} from '../../hooks/useTimeRange';
import {TimeRangeDropdown} from "../TimeRangeDropdown/TimeRangeDropdown.tsx";
import {FaRegCalendarAlt} from 'react-icons/fa';

export const SuperDataPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    timeRange,
    recentlyUsed,
    localStart,
    localEnd,
    isInvalid,
    handleQuickSelect,
    handleApply,
    handleDateTimeChange,
  } = useTimeRange({start: 'now-1h', end: 'now'});

  const closeDropdown = () => setIsOpen(false);

  const onClickInputLineHandler = () => {
    setIsOpen(prev => !prev);
  };

  const onRefreshHandler = () => {
    if (!isInvalid) {
      handleApply(closeDropdown);
    }
  };

  return (
    <div className={s.container}>
      <h1>Super Data Picker</h1>
      <div className={s.inputLineAndRefreshButton}>
        <div className={s.inputLine} onClick={onClickInputLineHandler}>
          <div><FaRegCalendarAlt className={s.calendarIcon}/></div>
          <div>{formatDisplayDate(timeRange.start)}</div>
          <span> → </span>
          <div>{formatDisplayDate(timeRange.end)}</div>
        </div>

        <button className={s.refreshButton} onClick={onRefreshHandler} disabled={isInvalid}>
          Refresh
        </button>

      </div>

      {isOpen && (
        <TimeRangeDropdown
          quickSelectItems={constants}
          recentlyUsed={recentlyUsed}
          localStart={localStart}
          localEnd={localEnd}
          isInvalid={isInvalid}
          onQuickSelect={handleQuickSelect}
          onDateTimeChange={handleDateTimeChange}
        />
      )}
    </div>
  );
};
