const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
    worker: "./src/worker.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.ejs',
        chunks: ['app']
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        mylib: {
          minSize: 0,
          chunks: "all",
          name: "chunk-mylib",
          priority: 10,
          test: /.*mylib.*/,
        },
      },
    },
  },
};
