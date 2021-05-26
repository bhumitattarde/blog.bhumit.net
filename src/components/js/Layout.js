import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import * as LayoutStyle from "../css/Layout.module.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*TODO this won't be necessary when you add a navbar of fixed position  */
    // Set screen width without scrollbars
    document.documentElement.style.setProperty(
      "--screenWidth",
      document.body.clientWidth + "px"
    );
  }

  render() {
    const { location, title, children } = this.props;
    return (
      <div className={LayoutStyle.globalWrapper}>
        <div className={LayoutStyle.contentWrapper}>
          <Header title={title} location={location} />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
