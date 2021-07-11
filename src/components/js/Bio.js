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
            Written by <strong>{author.name}</strong>
          </i>
          <ul className={BioStyle.contactList}>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </p>
      )}
    </div>
  );
};

export default Bio;
