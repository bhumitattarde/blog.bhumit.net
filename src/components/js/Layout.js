import React from "react"
import { Link } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import * as LayoutStyle from "../css/Layout.module.css"

const Layout = ({ location, title, children }) => {
  return (
    <div className={LayoutStyle.globalWrapper}>
      <Header title={title} location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
