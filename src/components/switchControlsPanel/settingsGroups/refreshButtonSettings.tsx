import { SwitchToggle } from "../switchToggle";
import s from "../switchControls.module.css";

type Props = {
  show: boolean;
  filled: boolean;
  iconOnly: boolean;
  setShow: (value: boolean) => void;
  setFilled: (value: boolean) => void;
  setIconOnly: (value: boolean) => void;
};

export const RefreshButtonSettings = ({ settings }: { settings: Props }) => (
  <fieldset className={s.controlGroup}>
    <legend>Refresh Button</legend>
    <SwitchToggle
      label="Show refresh button"
      checked={settings.show}
      onChange={() => settings.setShow(!settings.show)}
    />
    <SwitchToggle
      label="Refresh button filled"
      checked={settings.filled}
      onChange={() => settings.setFilled(!settings.filled)}
    />
    <SwitchToggle
      label="Refresh icon only"
      checked={settings.iconOnly}
      onChange={() => settings.setIconOnly(!settings.iconOnly)}
    />
  </fieldset>
);
