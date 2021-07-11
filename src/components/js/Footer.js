import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";

import * as FooterStyle from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyle.Footer}>
      <hr />
      <ul className={FooterStyle.footerContentList}>
        <li>
          {/* TODO change to angular bracks */}
          <FontAwesomeIcon icon={faCode} /> with{" "}
          <FontAwesomeIcon icon={faHeart} /> by{" "}
          <a href="https://www.bhumit.net">Bhumit Attarde</a>
        </li>
        <li>&copy; 2021 Bhumit Attarde. All rights reserved.</li>
      </ul>
    </footer>
  );
};

export default Footer;
