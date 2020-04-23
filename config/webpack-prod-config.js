const webpack = require("webpack");
const merge = require("webpack-merge");
// const TerserPlugin = require("terser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: {
    app: paths.appIndexJs
  },
  mode: "production",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  // Set the name of our JS bundle using a chunckhash
  // (e.g. '5124f5efa5436b5b5e7d_app.js')
  // Location where built files will go.
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/react-star-picker/" // use when deploying to github pages: needs project name in url
    // publicPath: "/" // use to serve prod-build locally
  },
  plugins: [
    // Set process.env.NODE_ENV to production
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // Extract styles from bundles into separate file
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },  
  // customize optimization if necessary:
  // optimization: {
  //   // splitChunks: {
  //   //    ...    
  //   // },
  //   // runtimeChunk: true,
  //   minimize : true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         mangle: {
  //           properties: true
  //         }
  //       }
  //     })
  //   ]
  // }
});