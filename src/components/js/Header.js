import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as HeaderStyle from "../css/Header.module.css"

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <header className={HeaderStyle.mainPageHeader}>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </header>
    )
  } else {
    header = (
      <header className={HeaderStyle.Header}>
        <h2>
          <Link to="/">{title}</Link>
        </h2>
      </header>
    )
  }

  return header
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Title",
}

export default Header
