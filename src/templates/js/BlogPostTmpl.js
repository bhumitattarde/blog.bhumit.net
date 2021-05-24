import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../../components/js/Bio"
import Layout from "../../components/js/Layout"
import Seo from "../../components/js/SEO"

import * as BlogPostTmplStyle from "../css/BlogPostTmpl.module.css"

const BlogPostTmpl = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article itemScope itemType="http://schema.org/Article">
        <header className={BlogPostTmplStyle.articleHeader}>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <small className={BlogPostTmplStyle.blogDate}>
            {post.frontmatter.date}
          </small>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>

      <nav className={BlogPostTmplStyle.blogNav}>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTmpl

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
