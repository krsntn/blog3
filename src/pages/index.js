import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import Layout from '../components/Layout';

const Index = ({ location, navigate }) => {
  const data = useSiteMetadata();
  console.log(`data2`, data);
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const [posts, setPosts] = useState(data.allMarkdownRemark.nodes);
  const [showAllPosts, setShowAllPosts] = useState(true);

  const renderHeader = (isExternal, link, component) => {
    if (isExternal) {
      return (
        <a href={link} itemProp="url" className="post-link">
          {component}
        </a>
      );
    }

    return (
      <Link to={link} itemProp="url" className="post-link">
        {component}
      </Link>
    );
  };

  const displayPosts = showAllPosts
    ? posts
    : posts.filter((post, index) => index < 5);

  return (
    <Layout>
      {displayPosts.length === 0 ? (
        <p className="no-blog-post">No blog posts found.</p>
      ) : (
        <ol className="list-none">
          {displayPosts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const isExternal = !!post.frontmatter.url;
            const link = post.frontmatter.url || post.fields.slug;
            const tags = post.frontmatter.tags;

            return (
              <li key={post.fields.slug} tabIndex="-1">
                <article
                  className="mb-10"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    {renderHeader(
                      isExternal,
                      link,
                      <strong className="main-reveal-text text-lg text-blue-500 dark:text-green-400">
                        {`${title} ${isExternal ? '??' : ''}`}
                      </strong>
                    )}
                  </header>
                  <p itemProp="description">{post.frontmatter.description}</p>
                  <small className="text-xs">{post.frontmatter.date}</small>
                  {/* <div>
                      {tags?.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </div> */}
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </Layout>
  );
};

export default Index;
