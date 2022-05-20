import React from 'react';
import { CilckLinkContextProvider } from './ClickLink';
import { SearchBlogContextProvider } from './SearchBlog';

const Stores = ({ children }) => {
  return (
    <CilckLinkContextProvider>
      <SearchBlogContextProvider>{children}</SearchBlogContextProvider>
    </CilckLinkContextProvider>
  );
};

export default Stores;
