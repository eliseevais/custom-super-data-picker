import { FiRefreshCw } from "react-icons/fi";
import clsx from "clsx";
import s from "./RefreshButton.module.css";

type Props = {
  disabled: boolean;
  onClick: () => void;
  iconOnly?: boolean;
  filled?: boolean;
};

export const RefreshButton = ({
  disabled,
  onClick,
  iconOnly = false,
  filled = false,
}: Props) => (
  <button
    className={clsx(
      s.refreshButton,
      filled && s.filled,
      iconOnly && s.iconOnly,
    )}
    onClick={onClick}
    disabled={disabled}
    title="Refresh"
  >
    <FiRefreshCw className={s.icon} />
    {!iconOnly && "Refresh"}
  </button>
);
