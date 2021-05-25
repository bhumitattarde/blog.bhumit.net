import React from "react";

import * as FooterStyle from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyle.Footer}>
      <hr />
      <ul className={FooterStyle.footerContentList}>
        <li>
          Made with &hearts; by{" "}
          <a href="https://www.bhumit.net">Bhumit Attarde</a>
        </li>
        <li>&copy; 2021 Bhumit Attarde. All rights reserved.</li>
      </ul>
    </footer>
  );
};

export default Footer;
