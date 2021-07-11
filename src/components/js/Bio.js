import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href={`https://www.github.com/${data.site.siteMetadata?.social.github}`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href={`mailto:${data.site.siteMetadata?.social.email}`}>
                <FontAwesomeIcon icon={faAt} />
              </a>
            </li>
            <li>
              <a
                href={`https://www.twitter.com/${data.site.siteMetadata?.social.twitter}`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </p>
      )}
    </div>
  );
};

export default Bio;
