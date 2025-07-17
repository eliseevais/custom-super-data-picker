import { type ChangeEvent, memo } from "react";
import type { WidthMode } from "../../../types/types.ts";
import s from "./widthSelector.module.css";

type Props = {
  value: WidthMode;
  onChange: (value: WidthMode) => void;
};

export const WidthSelector = memo(({ value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as WidthMode);
  };

  return (
    <div className={s.selectWrapper}>
      <span className={s.selectLabel}>Width: </span>
      <select value={value} onChange={handleChange} className={s.select}>
        <option value="restricted">Restricted (368px)</option>
        <option value="full">Full width (100%)</option>
        <option value="auto">Auto width</option>
      </select>
    </div>
  );
});
