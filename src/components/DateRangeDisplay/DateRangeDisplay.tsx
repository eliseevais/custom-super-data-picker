import s from './DateRangeDisplay.module.css';
import {FaRegCalendarAlt} from 'react-icons/fa';

type Props = {
  start: string;
  end: string;
  onClick: () => void;
};

export const DateRangeDisplay = ({start, end, onClick}: Props) => (
  <div className={s.inputLine} onClick={onClick}>
    <div className={s.calendarIcon}>
      <FaRegCalendarAlt/>
    </div>
    <div className={s.timeRange}>
      {start} → {end}
    </div>
  </div>
);
