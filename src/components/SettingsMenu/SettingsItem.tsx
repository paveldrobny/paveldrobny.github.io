import { ISettingsItem } from "../../interfaces";
import SettingsSwitch from "./SettingsSwitch";

function SettingsItem(props: ISettingsItem) {
  const { text, isActive, click } = props;

  return (
    <div className="settings-item" onClick={click}>
      <div>{text}</div>
      <SettingsSwitch isActive={isActive} />
    </div>
  );
}

export default SettingsItem;
