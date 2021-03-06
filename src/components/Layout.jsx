import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import DarkModeToggleButton from './DarkModeToggleButton';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import Stores from 'src/context';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  const header = (
    <React.Fragment>
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block"
      >
        <StaticImage
          src="../images/profile-pic.png"
          alt={siteMetadata.site.siteMetadata.author.name}
          placeholder="tracedSVG"
          backgroundColor="#ccc"
          layout="fixed"
          className="my-2 rounded-full w-full h-full"
        />
      </motion.div>
      <DarkModeToggleButton />
      <h2 className="font-semibold">
        <Link className="text-gray-900 dark:text-gray-100" to={`/`}>
          {siteMetadata.site.siteMetadata.title}
        </Link>
      </h2>
      <p className="text-sm max-w-lg">
        Written by karson, a front end dev trying to make the web a little
        better place while making a living.
      </p>
      <a href="https://twitter.com/ooneoneo" aria-label="Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="m-1"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
    </React.Fragment>
  );

  return (
    <Stores>
      <div className="bg-gray-100 dark:bg-gray-700 dark:text-white transition duration-500 ease-out min-h-screen">
        <div className="bg-gray-200 dark:bg-gray-800 w-full md:w-80 md:h-screen sticky md:fixed top-0 left-0 overflow-hidden text-center">
          <div
            className="md:h-screen p-4 flex flex-col justify-center items-center gap-2"
            style={{ minHeight: 200 }}
          >
            {header}
          </div>
        </div>

        <main className="relative bg-gray-100 dark:bg-gray-700 md:ml-80 p-10">
          {children}
        </main>
      </div>
    </Stores>
  );
};

export default React.memo(Layout);
