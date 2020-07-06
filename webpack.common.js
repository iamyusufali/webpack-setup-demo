const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject css into DOM
          'css-loader', //2. Convert css into commonjs
          'sass-loader', //1. Convert sass into css
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        }
      }
    ],
  },
};
