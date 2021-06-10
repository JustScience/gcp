require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Design Leadership Consultant | DesignOps Consulting",
    titleTemplate: ' | Design Consulting',
    description: "DesignOps and UX Strategy Consultant. Design Operations Consulting.",
    copyright: "Copyright 2021, Galenti Consulting, LLC. All rights reserved.",
    contact: "galenticonsulting@gmail.com",
    url: "https://galenti.io", // No trailing slash allowed!
    image: "/images/socialThumb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jgalenti",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },   
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/templates/project-details.js"),
          default: require.resolve("./src/templates/default-page-layout.js"),
        },
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `./src/pages/projects`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },

  ],
};
