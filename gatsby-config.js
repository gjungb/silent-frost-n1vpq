module.exports = {
  siteMetadata: {
    title: `TypeScript Starter`,
    description: ``,
    author: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appFzuGOyXEySxxYm",
            tableName: "folio",
            mapping: {
              Inhalt: "text/markdown"
            }
          },
          {
            baseId: "appFzuGOyXEySxxYm",
            tableName: "chapter",
            tableLinks: ["folio"]
          },
          {
            baseId: "appFzuGOyXEySxxYm",
            tableName: "representation"
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
