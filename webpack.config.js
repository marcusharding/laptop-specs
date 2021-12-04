const path = require('path');

const name = path.basename(__dirname);
const itemDist = path.join('dist', name, '/');

const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  context: __dirname,
  entry: ['./src/scripts/index.js', './src/styles/index.sass'],
  output: {
    filename: 'scripts/main.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
    publicPath: itemDist,
  },
	module: {
		rules: [
			{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
			{
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
		],
	},
	optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
		new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
			inject: false,
      template: 'index.html'
    }),
    new WebpackManifestPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/scripts/vendor/jquery-3.2.0.min.js'), to: 'scripts/vendor/[name][ext]' },
        { from: path.resolve(__dirname, 'src/scripts/vendor/modernizr-2.8.3.min.js'), to: 'scripts/vendor/[name][ext]' }
      ],
    }),
  ],
};
