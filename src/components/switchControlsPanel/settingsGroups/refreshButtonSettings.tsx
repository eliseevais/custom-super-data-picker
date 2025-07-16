import { SwitchToggle } from "../switchToggle";
import s from "./refreshButtonSettings.module.css";

type Props = {
  showRefreshButton: boolean;
  refreshFilled: boolean;
  refreshIconOnly: boolean;
  setShowRefreshButton: (val: boolean) => void;
  setRefreshFilled: (val: boolean) => void;
  setRefreshIconOnly: (val: boolean) => void;
};

export const RefreshButtonSettings = ({
  showRefreshButton,
  refreshFilled,
  refreshIconOnly,
  setShowRefreshButton,
  setRefreshFilled,
  setRefreshIconOnly,
}: Props) => (
  <fieldset className={s.controlGroup}>
    <legend className={s.legend}>Refresh Button</legend>
    <SwitchToggle
      label="Show refresh button"
      checked={showRefreshButton}
      onChange={() => setShowRefreshButton(!showRefreshButton)}
    />
    <SwitchToggle
      label="Refresh button filled"
      checked={refreshFilled}
      onChange={() => setRefreshFilled(!refreshFilled)}
    />
    <SwitchToggle
      label="Refresh icon only"
      checked={refreshIconOnly}
      onChange={() => setRefreshIconOnly(!refreshIconOnly)}
    />
  </fieldset>
);
