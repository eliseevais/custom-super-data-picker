import { memo } from "react";
import { FiRefreshCw } from "react-icons/fi";
import clsx from "clsx";
import s from "./RefreshButton.module.css";

type Props = {
  disabled: boolean;
  onClick: () => void;
  iconOnly?: boolean;
  filled?: boolean;
  compact?: boolean;
};

export const RefreshButton = memo(
  ({
    disabled,
    onClick,
    iconOnly = false,
    filled = false,
    compact = false,
  }: Props) => (
    <button
      className={clsx(
        s.refreshButton,
        filled && s.filled,
        iconOnly && s.iconOnly,
        compact && s.compact,
      )}
      onClick={onClick}
      disabled={disabled}
      title="Refresh"
      aria-label={iconOnly ? "Refresh" : undefined}
    >
      <FiRefreshCw className={s.icon} />
      {!iconOnly && "Refresh"}
    </button>
  ),
);
