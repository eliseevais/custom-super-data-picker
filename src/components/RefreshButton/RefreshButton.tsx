import s from './RefreshButton.module.css';

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export const RefreshButton = ({ disabled, onClick }: Props) => (
  <button className={s.refreshButton} onClick={onClick} disabled={disabled}>
    Refresh
  </button>
);
