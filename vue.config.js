const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

const plugins =
  process.env.NODE_ENV === "production"
    ? [
        {
          from: path.resolve("src/manifest.production.json"),
          to: `${path.resolve("dist")}/manifest.json`
        }
      ]
    : [
        {
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`
        }
      ];

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugin(plugins)],
    entry: {
      'background': './src/background.js',
      'jquery': './src/jquery.js'
    },
    output: {
      filename: 'js/[name].js'
    }
  }
};
