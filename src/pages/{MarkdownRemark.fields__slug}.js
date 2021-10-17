import React from 'react';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

import '../styles/post.css';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data.allMarkdownRemark.edges.find(
    (x) => x.node.id === post.id
  );

  return (
    <div>
      <Seo title={post.frontmatter.title} />
      <article itemType="http://schema.org/Article">
        <header>
          <h2 itemProp="headline">
            <strong className="text-blue-500 dark:text-green-400 text-lg">
              {post.frontmatter.title}
            </strong>
          </h2>
          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <small>{post.frontmatter.date}</small>
          </motion.div>
        </header>
        <motion.section
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mdx my-8 lg:mx-6"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav>
        <ul className="text-blue-500 dark:text-green-400 flex flex-wrap justify-between list-none py-4">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {'<'} {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} {'>'}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
