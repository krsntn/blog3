import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../utils/useSiteMetadata';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, title }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription: string =
    description || siteMetadata.site.siteMetadata.description;
  const defaultTitle: string = siteMetadata.site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
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
