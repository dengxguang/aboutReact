const Webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js", // 唯一入口文件
  output: {
    path: __dirname + "/build", // 打包后文件存放的地方
    filename: 'bundle.js' // 打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, // 实时刷新
    port: 8002,
    hot: true //热加载模块
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
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              }
            }  
          },{
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tepl.html" // new 一个插件的实例，并传入相关的参数
    }),
    new Webpack.HotModuleReplacementPlugin()//热加载插件
  ]
}