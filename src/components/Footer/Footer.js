import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const urlUpdate =
    "https://api.github.com/repos/paveldrobny/paveldrobny.github.io/branches/gh-pages";

  const [update, setUpdate] = useState("0000/00/00");
  const [links, setLinks] = useState([
    { href: "https://vk.com/pdrobny", class: "fab fa-vk" },
    { href: "https://github.com/paveldrobny", class: "fab fa-github" },
  ]);

  useEffect(() => {
    let result = "";
    return fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.commit.commit.author.date.slice(0, 10);
        setUpdate(result);
      })
      .catch((err) => {
        return err;
      });
  });

  return (
    <footer>
        <div id="updateSite">Update: {update}</div>
        <div id="footer_Cont">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.href}>
                  <i className={link.class}></i>
              </a>
            );
          })}
        </div>
    </footer>
  );
}

export default Footer;
