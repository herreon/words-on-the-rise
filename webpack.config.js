const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  watch: true,
  
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  resolve: { extensions: [".js", ".ts"] },
  devtool: "inline-source-map",

  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  }

};