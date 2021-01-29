const path = require("path");
const pluginsConfig = require("./webpack.plugins.js");
const Timestamp = new Date().getTime()
module.exports = {
  entry: {
    three: "./src/scene/index.js"
  },
  mode: "development",
  plugins: pluginsConfig,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    host: "192.168.12.120",
    port: "8000",
    disableHostCheck: true // 取消host检查
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: `[name].bundle.${Timestamp}.js`,
    chunkFilename:  `[name].bundle.${Timestamp}.js`,
    path: path.resolve(__dirname, "map")
  }
};
