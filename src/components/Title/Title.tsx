import "./Title.css";
import { ITitle } from "../../interfaces";

function Title(props: ITitle) {
  return (
    <h3 className="title-main">
      <i className={props.icon}></i> {props.text}
    </h3>
  );
}

export default Title;
