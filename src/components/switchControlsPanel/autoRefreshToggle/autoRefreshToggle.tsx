import { SwitchToggle } from "../switchToggle";
import s from "./autoRefreshToggle.module.css";

type Props = {
  isAutoRefreshOn: boolean;
  setIsAutoRefreshOn: (value: boolean) => void;
  refreshInterval: number; // в миллисекундах
  setRefreshInterval: (value: number) => void;
};

export const AutoRefreshToggle = ({
  isAutoRefreshOn,
  setIsAutoRefreshOn,
  refreshInterval,
  setRefreshInterval,
}: Props) => {
  const intervalSeconds = refreshInterval / 1000;

  const onIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = Number(e.target.value);
    if (!isNaN(seconds) && seconds >= 1) {
      setRefreshInterval(seconds * 1000);
    }
  };

  return (
    <fieldset className={s.controlGroup}>
      <legend>Auto Refresh</legend>
      <SwitchToggle
        label="Enable auto refresh"
        checked={isAutoRefreshOn}
        onChange={() => setIsAutoRefreshOn(!isAutoRefreshOn)}
      />
      <label className={s.intervalWrapper}>
        <span className={s.intervalLabel}>Interval (sec):</span>
        <input
          type="number"
          min={1}
          step={1}
          value={intervalSeconds}
          disabled={!isAutoRefreshOn}
          onChange={onIntervalChange}
          className={s.inputInterval}
        />
      </label>
    </fieldset>
  );
};
