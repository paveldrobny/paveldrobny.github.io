import { useTranslation } from "react-i18next";
import "./Footer.css";
import { socialData } from "../../data/lists";
import FooterLink from "./FooterLink";
import { siteUpdate } from "../../data/config";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div id="footer-updated-text">
        {t("updated")}: {siteUpdate}
      </div>
      <ul className="footer-social">
        {socialData.map((s) => {
          return <FooterLink key={s.url} {...s} />;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
