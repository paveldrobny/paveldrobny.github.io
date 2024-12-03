import { ISettingsItem } from "../../interfaces";

function SettingsRadio(props: ISettingsItem) {
  const { text, isActive, click } = props;

  return (
    <div
      className={`settings-radio ${isActive ? "is-active" : ""}`}
      onClick={click}
    >
      <div>{text}</div>
    </div>
  );
}

export default SettingsRadio;
