import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as BioStyle from "../css/Bio.module.css";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            website
            linkedin
            github
            email
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  // const social = data.site.siteMetadata?.social

  return (
    <div className={BioStyle.Bio}>
      {author?.name && (
        <p>
          <i>
            Written by{" "}
            <strong>
              <a href={data.site.siteMetadata?.social.website}>{author.name}</a>
            </strong>
          </i>
          <ul className={BioStyle.contactList}>
            <li>
              <a
                href={`https://www.linkedin.com/${data.site.siteMetadata?.social.linkedin}`}
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href={`https://www.github.com/${data.site.siteMetadata?.social.github}`}
              >
                github
              </a>
            </li>
            <li>
              <a href={`mailto:${data.site.siteMetadata?.social.email}`}>
                mail
              </a>
            </li>
            <li>
              <a
                href={`https://www.twitter.com/${data.site.siteMetadata?.social.twitter}`}
              >
                twitter
              </a>
            </li>
          </ul>
        </p>
      )}
    </div>
  );
};

export default Bio;
