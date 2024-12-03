import { IFooterLink } from "../../interfaces";

function FooterLink(props: IFooterLink) {
  const { url, clsName } = props;

  return (
    <li className="footer-link">
      <a href={url}>
        <i className={`fa-brands ${clsName} footer-icon`}></i>
      </a>
    </li>
  );
}

export default FooterLink;
