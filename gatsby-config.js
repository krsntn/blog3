module.exports = {
  siteMetadata: {
    title: `Krsn's Lazy Dev Blog`,
    author: {
      name: `krsntn`,
      summary: `web dev`,
    },
    description: `Front End Dev, Sport Enthusiast & Occasional Graphic Designer making the web a little better place while trying to earn a living.`,
    siteUrl: `https://blog.krsn.xyz`,
    social: {
      twitter: `ooneoneo`,
    },
    defaultImage: 'images/bg.jpeg',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Krsn's Blog`,
        short_name: `Krsn's Blog`,
        background_color: `#fff`,
        theme_color: `#444`,
        display: `fullscreen`,
        icon: 'static/favicons/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        className: 'dark',
      },
    },
  ],
};
