const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: {
    app: paths.appIndexJs
  },
  mode: "production",
  // Set the name of our JS bundle using a chunckhash
  // (e.g. '5124f5efa5436b5b5e7d_app.js')
  // Location where built files will go.
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/"
  },
  plugins: [
    // minify JS
    new UglifyJSPlugin(),
    // Set process.env.NODE_ENV to production
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // Extract text/(s)css from a bundle, or bundles, into a separate file.
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    rules: [
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: {
          // use babel for transpiling JavaScript files
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        // look for .css or .scss files.
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                discardDuplicates: true,
                sourceMap: false,
                // This enables local scoped CSS based in CSS Modules spec
                modules: true,
                // generates a unique name for each class (e.g. app__app___2x3cr)
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
            // Add additional loaders here. (e.g. sass-loader)
          ]
        })
      }
    ]
  },
  // customize optimization if necessary:
  // optimization: {
  //   splitChunks: {
  //      ...    
  //   },
  //   runtimeChunk: true
  // }
});