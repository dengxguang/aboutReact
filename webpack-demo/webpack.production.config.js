const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'production',
  devtool: 'null',
  entry: __dirname + "/app/main.js", // 唯一入口文件
  output: {
    path: __dirname + "/build", // 打包后文件存放的地方
    filename: 'js/bundle-[hash].js' // 打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./public", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, // 实时刷新
    port: 8002,
    hot: true
  },
  module: {  // babel配置
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              }
            }  
          },{
            loader: 'postcss-loader'
          },{
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tepl.html" // new 一个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
}