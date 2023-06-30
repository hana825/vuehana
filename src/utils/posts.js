const context = require.context("../../public/posts", false, /\.md$/);
const files = context.keys().map((key) => ({
  name: key,
  title: key.replace(/\.md$/, "").split("/").pop(),
  content: context(key).default,
}));

export default files;
