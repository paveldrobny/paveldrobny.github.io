import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div id="footer-update-text">Update: 30.11.2024</div>
      <div className="footer-social">
        <li className="footer-link">
          <a href="https://vk.com/pdrobny">
            <i className="fa-brands fa-vk footer-icon"></i>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://github.com/paveldrobny">
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
        </li>
      </div>
    </footer>
  );
}

export default Footer;
