var path = require('path')
var webpack = require('webpack')

module.exports = {
  // entry: './src/main.js',
  entry: './src/index.js', //打包 插件入口
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: 'build.js'
    filename: 'demo.js',
    library:'demo',
    libraryTarget:'umd',
    umdNamedDefine:true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //     // the "scss" and "sass" values for the lang attribute to the right configs here.
        //     // other preprocessors should work out of the box, no loader config like this necessary.
        //     'scss': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader'
        //     ],
        //     'sass': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader?indentedSyntax'
        //     ]
        //   }
        //   // other vue-loader options go here
        // }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  // 这几项配置需要研究下，似乎将某些依赖找到了其他的引用位置
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   overlay: true
  // },
  // performance: {
  //   hints: false
  // },
  // devtool: '#eval-source-map'
}

// 生产环境下打包要混淆和压缩代码
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: false
//     })
//   ])
// }
