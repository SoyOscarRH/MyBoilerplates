import { Configuration } from "webpack"

const Configuration: Configuration = {
  entry: "./Code/App/index.tsx",
  output: {
    path: __dirname + "/Distribution/",
    publicPath: "Webpage/Distribution/",
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader?&namedExport&camelCase",
            options: {
              modules: true,
              camelCase: true,
              namedExport: true,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
    ],
  },
}

module.exports = Configuration
