const { makeSlug } = require("./src/utils/makeSlug");
const { resolve } = require("path");

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query readChapters {
      allAirtable(filter: { table: { eq: "chapter" } }) {
        edges {
          node {
            recordId
            chapter: data {
              Name
              folios: folio {
                recordId
                folio: data {
                  Name
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    data: {
      allAirtable: { edges: chapters }
    }
  } = result;

  chapters.forEach(({ node: { recordId, chapter } }, outer) => {
    const [title, slug] = makeSlug(chapter.Name);
    const parent = `/chapters/${slug}`;
    createPage({
      path: parent,
      component: resolve(`./src/templates/chapter-template.tsx`),
      context: {
        kind: "Chapter",
        index: outer,
        recordId,
        title,
        path: parent
      }
    });

    const folios = chapter.folios;

    folios.forEach(({ recordId, folio }, inner) => {
      const [title, slug] = makeSlug(folio.Name);
      const child = `${parent}/${slug}`;
      createPage({
        path: child,
        component: resolve(`./src/templates/folio-template.tsx`),
        context: {
          kind: "Folio",
          index: inner,
          recordId,
          title,
          path: child
        }
      });
      // TODO: find more about createParentChildLink({ parent, child });
    });
  });
};
