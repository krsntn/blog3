import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { motion } from 'framer-motion';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import Seo from '../components/Seo';

const Index = ({ location }) => {
  const data = useSiteMetadata();
  const [clicked, setClicked] = useState(null);
  const posts = data.allMarkdownRemark.nodes;

  const renderHeader = (isExternal, link, component) => {
    if (isExternal) {
      return (
        <a
          className="absolute"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          itemProp="url"
        >
          {component}
        </a>
      );
    }

    return (
      <motion.button
        onClick={() => {
          setClicked(link);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            navigate(link);
          }, 800);
        }}
        itemProp="url"
        className="absolute"
        animate={{
          top: clicked === link ? 0 : 'unset',
          opacity: clicked && clicked !== link ? 0 : 1,
        }}
        transition={{ duration: 0.35 }}
      >
        {component}
      </motion.button>
    );
  };

  return (
    <React.Fragment>
      <Seo title="Home" />
      <div className="relative">
        {posts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          <ol className="list-none">
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug;
              const isExternal = !!post.frontmatter.url;
              const link = post.frontmatter.url || post.fields.slug;

              return (
                <motion.li
                  animate={{ opacity: clicked && clicked !== link ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                  key={post.fields.slug}
                  tabIndex="-1"
                >
                  <article
                    className="mb-10"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      {renderHeader(
                        isExternal,
                        link,
                        <strong className="main-reveal-text text-lg text-blue-500 dark:text-green-400 hover:underline">
                          {`${isExternal ? '->' : ''} ${title}`}
                        </strong>
                      )}
                    </header>
                    <motion.div
                      animate={{ opacity: clicked ? 0 : 1 }}
                      transition={{ duration: 0.25 }}
                      className="relative top-8 pb-6"
                    >
                      <p itemProp="description">
                        {post.frontmatter.description}
                      </p>
                      <small className="text-xs">{post.frontmatter.date}</small>
                    </motion.div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        )}
      </div>
    </React.Fragment>
  );
};

export default Index;
