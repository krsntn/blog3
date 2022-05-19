import React from 'react';
import { SearchBlogContextProvider } from './SearchBlog';

const Stores = ({ children }) => {
  return <SearchBlogContextProvider>{children}</SearchBlogContextProvider>;
};

export default Stores;
