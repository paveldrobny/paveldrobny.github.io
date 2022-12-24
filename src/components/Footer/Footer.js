import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const urlUpdate =
    "https://api.github.com/repos/paveldrobny/paveldrobny.github.io/branches/gh-pages";

  const [update, setUpdate] = useState("24.12.2022");
  const [links, setLinks] = useState([
    { href: "https://vk.com/pdrobny", class: "fab fa-vk" },
    { href: "https://github.com/paveldrobny", class: "fab fa-github" },
  ]);

  useEffect(() => {
    let result = "";
    // return fetch(urlUpdate)
    //   .then((res) => res.json())
    //   .then((out) => {
    //     result = out.commit.commit.author.date.slice(0, 10);
    //     setUpdate(result);
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
  });

  return (
    <div id="footer-wrapper">
      <footer>
        <div id="footer-update-text">Update: {update} </div>
        <div>
          {links.map((link, index) => {
            return (
              <a key={index} id="footer-link" href={link.href}>
                <i className={link.class}></i>
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
