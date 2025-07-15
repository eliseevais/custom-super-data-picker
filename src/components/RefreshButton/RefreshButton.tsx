import s from "./RefreshButton.module.css";
import { FiRefreshCw } from "react-icons/fi";

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export const RefreshButton = ({ disabled, onClick }: Props) => (
  <button className={s.refreshButton} onClick={onClick} disabled={disabled}>
    <FiRefreshCw className={s.icon} />
    Refresh
  </button>
);
