import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import '../styles/post.css';

interface IPageQuery {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    markdownRemark: {
      id: number;
      html: string;
      frontmatter: {
        title: string;
        description: string;
        date: Date;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: {
          id: number;
          frontmatter: {
            title: string;
          };
        };
        next: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            url: string;
          };
        };
        previous: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            url: string;
          };
        };
      }[];
    };
  };
}

const BlogPostTemplate: React.FC<PageProps & IPageQuery> = (props) => {
  const post = props.data.markdownRemark;
  const otherPosts = props.data.allMarkdownRemark.edges.find(
    (x) => x.node.id === post.id
  );

  const previous = otherPosts?.previous;
  const next = otherPosts?.next;

  return (
    <div>
      <Seo title={post.frontmatter.title} />
      <article itemType="http://schema.org/Article" className="overflow-auto">
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
        <ul className="text-blue-500 dark:text-green-400 flex flex-wrap justify-between gap-4 list-none py-4">
          <li>
            {previous && previous.frontmatter.url && (
              <a
                href={previous.frontmatter.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                {'<'} {previous.frontmatter.title}
              </a>
            )}
            {previous && !previous.frontmatter.url && previous.fields.slug && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="hover:underline"
              >
                {'<'} {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.url && (
              <a
                href={next.frontmatter.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                {next.frontmatter.title} {'>'}
              </a>
            )}
            {next && !next.frontmatter.url && next.fields.slug && (
              <Link
                to={next.fields.slug}
                rel="prev"
                className="hover:underline"
              >
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
        date(formatString: "MMMM, YYYY")
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
            url
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
            url
          }
        }
      }
    }
  }
`;
