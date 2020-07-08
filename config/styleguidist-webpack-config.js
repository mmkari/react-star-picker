
// const path = require("path");
// const paths = require("./paths");


// module.exports = {
//   entry: "./dist/index.js",
//   output: {
//     filename: "bundle.js",
//     path: `${__dirname  }/styleguidist-dist`
//   },

//   // Enable sourcemaps for debugging webpack"s output.
//   devtool: "source-map",

//   resolve: {
//     extensions: [".js", ".jsx"]
//   },

//   module: {
//     rules: [
//       {
//         // look for .js or .jsx files
//         test: /\.(js|jsx)$/,
//         include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
//         exclude: /(node_modules)/,
//         use: {
//           // use babel for transpiling JavaScript files
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/react"]
//           }
//         }
//       },
//       {
//         // look for .css or .scss files
//         test: /\.(css|scss)$/,
//         include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//       }
//     ]
//   },

// };


const path = require("path");
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
  // Set the name of our JS bundle using a chunckhash
  // (e.g. '5124f5efa5436b5b5e7d_app.js')
  // Location where built files will go.
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/react-star-picker/"
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
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
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
        include: [path.resolve(paths.appSrc), path.resolve(paths.appExamples)],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
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