import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const SEO = ({ description, lang, meta, title }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription =
    description || siteMetadata.site.siteMetadata.description;
  const defaultTitle = siteMetadata.site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.site.siteMetadata.social.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
