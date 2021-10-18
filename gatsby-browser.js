// normalize CSS across browsers
import './src/styles/normalize.css';
import './src/styles/global.css';

// Highlighting for code blocks
import 'prismjs/themes/prism-tomorrow.css';

import React from 'react';
import Layout from './src/components/Layout';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0)

  return false;
};
