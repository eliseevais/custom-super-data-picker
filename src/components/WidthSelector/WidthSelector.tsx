import type { WidthMode } from "../../types/types.ts";
import s from "./SwitchControls.module.css";

type Props = {
  value: WidthMode;
  onChange: (value: WidthMode) => void;
};

export const WidthSelector = ({ value, onChange }: Props) => {
  return (
    <div className={s.selectWrapper}>
      <span className={s.selectLabel}>Width: </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as WidthMode)}
      >
        <option value="restricted">Restricted (368px)</option>
        <option value="full">Full width (100%)</option>
        <option value="auto">Auto width</option>
      </select>
    </div>
  );
};
