import { memo } from "react";
import s from "./switchToggle.module.css";

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const SwitchToggle = memo(({ label, checked, onChange }: Props) => (
  <div className={s.switchContainer}>
    <label className={s.switch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={s.slider}></span>
    </label>
    <span className={s.switchLabel}>{label}</span>
  </div>
));
