import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import DarkModeToggleButton from './DarkModeToggleButton';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const Layout = ({ location, children }) => {
  const siteMetadata = useSiteMetadata();

  const header = (
    <>
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StaticImage
          src="../images/profile-pic.png"
          alt={siteMetadata.site.siteMetadata.author.name}
          placeholder="tracedSVG"
          backgroundColor="#ccc"
          layout="fixed"
          className="hidden md:block my-6 rounded-full w-full h-full"
        />
      </motion.div>
      <DarkModeToggleButton />
      <h2 className="font-semibold my-2">
        <Link className="text-gray-900 dark:text-gray-100" to={`/`}>
          {siteMetadata.site.siteMetadata.title}
        </Link>
      </h2>
      <p className="text-sm">
        Written by karson, a front end dev trying to make the web a little
        better place while earning a living.
      </p>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white transition duration-500 ease-out min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-700 w-screen md:w-80 md:h-screen fixed top-0 left-0 overflow-hidden text-center">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          {header}
        </div>
      </div>

      <main className="relative bg-white dark:bg-gray-800 md:ml-80 top-48 md:top-0 p-10">
        {children}
      </main>
    </div>
  );
};

export default React.memo(Layout);
