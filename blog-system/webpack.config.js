const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  entry: Path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: Path.join(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    },{
      test: /\.jsx$/,
      loader: 'babel-loader'
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },{
      test: /\.(gif|png|jpg|jpeg|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name]-aaa.[ext]'
        }
      }]
    }]
  },

  plugins: [
    /**
     * TODO
     */
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlWebpackPlugin()
  ]
};

if (isDev) {
  /**
   * source-map                    完整、慢
   * cheap-module-source-map       不带列映射、较快
   * eval-source-map               完整、性能和安全隐患、很快
   * cheap-module-eval-source-map  不带列映射、性能和安全隐患、最快
   * @type {string}
   */
  config.devtool = 'cheap-module-eval-source-map';
  /**
   * TODO
   * @type {{port: number, host: string, overlay: {errors: boolean}, historyFallback: {}, open: boolean}}
   */
  config.devServer = {
    port: 8081,
    inline: true,
    open: true,
    hot: true,
    historyApiFallback: true
  };
  config.plugins.push(
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config;
