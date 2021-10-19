import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { motion } from 'framer-motion';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import Seo from '../components/Seo';

interface PostProps {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    url: string;
    date: Date;
  };
}

const Index: React.FC = () => {
  const data = useSiteMetadata();
  const [clicked, setClicked] = useState<string | null>(null);
  const posts: PostProps[] = data.allMarkdownRemark.nodes;

  const renderHeader = (
    isExternal: boolean,
    link: string,
    component: JSX.Element
  ) => {
    if (isExternal) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="absolute text-left left-0"
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
          }, 600);
        }}
        itemProp="url"
        className="absolute text-left left-0"
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
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <ol className="relative list-none">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const isExternal = !!post.frontmatter.url;
            const link = post.frontmatter.url || post.fields.slug;

            return (
              <motion.li
                className="mb-10"
                animate={{ opacity: clicked && clicked !== link ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                key={post.fields.slug}
                tabIndex={-1}
              >
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    {renderHeader(
                      isExternal,
                      link,
                      <strong className="main-reveal-text text-lg text-blue-500 dark:text-green-400 hover:underline">
                        {`${isExternal ? '->' : ''} ${title}`}
                      </strong>
                    )}
                    <div className="invisible">
                      <strong className="text-lg hover:underline">
                        {`${isExternal ? '->' : ''} ${title}`}
                      </strong>
                    </div>
                  </header>
                  <motion.div
                    animate={{ opacity: clicked ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p itemProp="description">{post.frontmatter.description}</p>
                    <small className="text-xs">{post.frontmatter.date}</small>
                  </motion.div>
                </article>
              </motion.li>
            );
          })}
        </ol>
      )}
    </React.Fragment>
  );
};

export default Index;
