import * as React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { transitionCoverColor } from "../config.js";
import Bio from "../components/js/Bio";
import Layout from "../components/js/Layout";
import Seo from "../components/js/SEO";

import * as BlogIndexStyle from "./css/index.module.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p className={BlogIndexStyle.noPostsText}>
          Nothing to see here yet.. Check back later!
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol className={BlogIndexStyle.blogList}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug} className={BlogIndexStyle.blogListEntry}>
              <article
                className={BlogIndexStyle.blogDescription}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <AniLink
                      cover
                      to={post.fields.slug}
                      direction="left"
                      bg={transitionCoverColor}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </AniLink>
                  </h2>
                  <small className={BlogIndexStyle.blogDate}>
                    {post.frontmatter.date}
                  </small>
                </header>
                <section className={BlogIndexStyle.blogExcerpt}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
