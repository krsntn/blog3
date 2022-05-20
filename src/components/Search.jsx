import React, { useCallback, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { SearchBlogContext } from 'src/context/SearchBlog';
import { ClickLinkContext } from 'src/context/ClickLink';

const Search = () => {
  const { dispatch } = useContext(SearchBlogContext);
  const {
    state: { clickLink },
  } = useContext(ClickLinkContext);
  const timer = useRef(null);

  const searchBlog = useCallback(
    (event) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        dispatch({ type: 'update', payload: event.target.value });
      }, 500);
    },
    [dispatch]
  );

  return (
    <motion.div
      className="py-5 relative"
      animate={{
        opacity: clickLink ? 0 : 1,
        top: clickLink ? '-87px' : '0',
        position: 'relative',
      }}
      transition={{ duration: 0.35 }}
    >
      <div>
        <input
          type="text"
          className="bg-gray-200 dark:bg-gray-600 p-2 w-full rounded leading-7 text-md text-green"
          onChange={searchBlog}
          placeholder="search blog..."
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Search);
