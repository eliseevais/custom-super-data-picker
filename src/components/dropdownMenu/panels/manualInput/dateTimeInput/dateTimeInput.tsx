import { useRef } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import s from "./dateTimeInput.module.css";

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export const DateTimeInput = ({ value, placeholder, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className={s.inputContainer}>
      <input
        ref={inputRef}
        type="datetime-local"
        value={value.startsWith("now") ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={s.timeInput}
      />
      <button
        type="button"
        className={s.calendarButton}
        onClick={handleIconClick}
        aria-label="Open calendar"
      >
        <FaRegCalendarAlt className={s.calendarIcon} />
      </button>
    </div>
  );
};
