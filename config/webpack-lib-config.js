const path = require("path");
const paths = require("./paths");

module.exports =  {
  entry: paths.libIndexJs,
  mode: "production",
  output: {
    filename: "index.js",
    path: paths.libBuild,
    libraryTarget: 'umd',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  // externals: {
  //   'react': 'react',  
  //   'react-dom' : 'reactDOM' 
  // },
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
  }
  
};