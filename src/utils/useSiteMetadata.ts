import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): any => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          description
          siteUrl
          social {
            twitter
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            url
            tags
          }
        }
      }
    }
  `);

  return data;
};
