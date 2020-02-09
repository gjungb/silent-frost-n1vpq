const slug = require("slug");
slug.defaults.mode = "rfc3986";

const makeSlug = str => {
  return [str, slug(str)];
};

module.exports = {
  makeSlug
};
