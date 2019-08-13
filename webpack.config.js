const HTMLPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const COPY_RULES = {}
module.exports = {
  mode: "development",
  plugins: [
    new HTMLPlugin({
      template: "src/index.html",
      title: 'My App',
      path: __dirname + '/casaub0n.github.io',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin(
      [
        {
          from: 'src/fonts',
          to: 'fonts/'
        },
        {
          from: 'assets/favicon.ico',
          to: './'
        },
        {
          from: 'assets/**',
          to: './'
        },
        {
          from: 'src/manifest.json',
          to: './'
        }
      ],
      { context: '' }
    )
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: __dirname + '/casaub0n.github.io',
    filename: 'public.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: "file-loader"
      }
    ]
  }
};
