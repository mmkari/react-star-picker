const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
  appAssets: resolveApp("src/assets"), // For images and other assets
  appBuild: resolveApp("dist-examples"), // Prod built files end up here (Examples!)
  appConfig: resolveApp("config"), // App config files (Examples)
  appHtml: resolveApp("examples/index.html"),
  appIndexJs: resolveApp("examples/index.jsx"), // Main entry point
  appSrc: resolveApp("src"), // App source
  appExamples:resolveApp("examples")  // Examples source
};