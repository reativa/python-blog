module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Python para impacientes`,
    author: `Reativa`,
    description: `Transformamos programadores iniciantes nos melhores programadores do mercado.`,
    siteUrl: `https://javascript.reativa.dev/`,
    social: {
      twitter: `reativa-dev`,
      facebook: `reativa-dev`,
      instagram: `reativa-dev`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-remark-code-repls',
      options: {
        // Optional default link text.
        // Defaults to "REPL".
        // e.g. <a href="...">Click here</a>
        defaultText: 'Click here',
    
    
        // Example code links are relative to this dir.
        // e.g. examples/path/to/file.js
        directory: `${__dirname}/content/examples/`,
    
        // Optional link target.
        // Note that if a target is specified, "noreferrer" will also be added.
        // e.g. <a href="..." target="_blank" rel="noreferrer">...</a>
        target: '_blank',
    
    
        // Provider specific options
        codepen: {
          // Optional path to a custom redirect template.
          // The redirect page is only shown briefly,
          // But you can use this setting to override its CSS styling.
          //redirectTemplate: `${__dirname}/src/redirect-template.js`,
    
          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // e.g. '<div id="root"></div>'
          html: '',
    
          // Optional externals to load from a CDN.
          // e.g. '//unpkg.com/react/umd/react.development.js'
          externals: [],
    
          // Include CSS with matching name.
          // If set to `true`, when specifying `file1.js` as example file,
          // it will try to inject the CSS in `file1.css` if the file exists,
          // otherwise the default behaviour is preserved
          includeMatchingCSS: false,
        },
    
        codesandbox: {
          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // e.g. '<div id="root"></div>'
          html: '',
    
          // Optional runtime dependencies to load from NPM.
          // e.g. ['react', 'react-dom'] or ['react@15', 'react-dom@15']
          dependencies: [],
        }
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-embedder`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155080700-5`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2374911412821725",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KZH8KWD",

        // // Include GTM in development.
        // // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // // datalayer to be set before GTM is loaded
        // // should be an object or a function that is executed in the browser
        // // Defaults to null
        defaultDataLayer: { platform: "plataforma-reativa" },

        // // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}