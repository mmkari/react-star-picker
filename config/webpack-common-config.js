const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
const path = require("path");
const paths = require("./paths");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    })
  ],
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    // // Aliases help with shortening relative paths
    // // 'Components/button' === '../../../components/button'
    // alias: {
    //   Components: path.resolve(paths.appSrc, "components"),
    //   Containers: path.resolve(paths.appSrc, "containers"),
    //   Utils: path.resolve(paths.appSrc, "utils")
    // }
  },
  module: {
    rules: [
      {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: "ts-loader"
              }
          ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
      },
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};