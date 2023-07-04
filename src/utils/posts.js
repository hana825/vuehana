const context = require.context("../../public/posts/", true, /\.md$/);

function generateFileObject(key) {
  const pathParts = key.split("/");
  const name = pathParts.slice(-1)[0];
  const title = name.replace(/\.md$/, "");
  const folderPath = pathParts.slice(1, -1).join("/");

  return {
    name: title,
    folderPath: folderPath,
    content: context(key).default,
  };
}

const files = context.keys().map((key) => generateFileObject(key));

export default files;
