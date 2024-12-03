import { ISettingsItem } from "../../interfaces";

function SettingsSwitch(props: ISettingsItem) {
  const { isActive, click } = props;

  return (
    <div
      className={`settings-switch ${isActive ? "is-active" : ""}`}
      onClick={click}
    />
  );
}

export default SettingsSwitch;
