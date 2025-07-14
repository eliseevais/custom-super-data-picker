import s from './DateTimeInput.module.css';

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export const DateTimeInput = ({ value, placeholder, onChange }: Props) => {
  return (
    <input
      type="datetime-local"
      value={value.startsWith('now') ? '' : value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={s.timeInput}
    />
  );
};
