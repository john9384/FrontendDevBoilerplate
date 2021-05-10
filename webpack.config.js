const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "src"),
  },
  watch: true,
  watchOptions: {
    ignored: ["**/node_modules"],
    aggregateTimeout: 200,
    poll: 1000,
  },
  mode: "development",
};
