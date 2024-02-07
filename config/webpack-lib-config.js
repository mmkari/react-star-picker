const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const paths = require("./paths");

module.exports =  {
  entry: paths.libIndexJs,
  mode: "production",
  output: {
    filename: "index.js",
    path: paths.libBuild,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  externals: {
    "react": {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },  
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    } 
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
      {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
      },
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        include: [path.resolve(paths.appSrc)],
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
        include: [path.resolve(paths.appSrc)],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        minify: TerserPlugin.uglifyJsMinify,
        parallel: true,
        terserOptions: {
          compress: true,
          output: {
            preamble: "'use client'",
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
		new webpack.BannerPlugin({
			banner: '"use client"\n',
      raw: true,
      entryOnly: true,
		})
	]
};