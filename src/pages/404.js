import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/js/Layout";
import SEO from "../components/js/SEO";

import * as NotFoundPageStyle from "./css/404.module.css";

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // member vars
    this.data = this.props.data;
    this.siteTitle = this.data.site.siteMetadata.title;
    this.counterFnID = "";

    // `this` bindingss
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    if (this.state.count < 404) {
      this.setState((prevState) => {
        return { count: prevState.count + 101 };
      });
    } else {
      clearInterval(this.counterFnID);
    }
  }

  componentDidMount() {
    this.counterFnID = setInterval(this.incrementCount, 1000);
  }

  render() {
    return (
      <Layout location={this.props.location} title={this.siteTitle}>
        <SEO title="404: Not Found" />
        <h1>{this.state.count}</h1>
        <h1>Nothing to see here..</h1>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
