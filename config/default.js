module.exports = {
  devPort: '8000', // dev server 运行的端口

  designLayoutWidth: 750, // 设计稿的宽度 默认750,如果开启 Zoom 则直接按照设计稿和屏幕宽度进行缩放
  baseSize: 10, // 计算 rem 的基数，通常不用修改
  enableREM: true, // 是否用 rem 做适配
  enableZoom: true, // 是否用 zoom 做适配


  /* 如果不了解 webpack 的配置，请不要修改下面的配置项 */

  /**
   * webpack base config
   **/
  entry: [
    'src/js/main.js'
  ],
  output: {
    path: 'dist',
    publicPath: './',
    filename: 'js/bundle.js?[hash:6]'
  },
  imgLoaderQuery: {
    limit: 1000,
    name: 'img/[name].[ext]?[hash:6]'
  },
  audioLoaderQuery: {
    name: 'plugin/[name].[ext]?[hash:6]'
  },
  externals: {},
  // html-webpack-plugin 的配置，详细描述参考：https://github.com/ampedandwired/html-webpack-plugin
  htmlWebpackPluginOptions: {
    template: 'src/index.html'
  },
  // postcss-plugin-px2rem 的配置，详细描述参考：https://github.com/ant-tool/postcss-plugin-px2rem
  px2remOptions: {
    // rootValue 由 config.designLayoutWidth / config.baseSize 而来，不用配置
    unitPrecision: 5,
    propWhiteList: [],
    propBlackList: [],
    selectorBlackList: ['ignore'],
    ignoreIdentifier: false,
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  },

  /**
   * webpack development config
   *
   * 只作用于 development 模式，会覆盖 base config 中相同的配置项
   **/
  DEVELOPMENT: {
  },

  /**
   * webpack production config
   *
   * 只作用于 production 模式，会覆盖 base config 中相同的配置项
   **/
  PRODUCTION: {
    // 生成的 css 文件路径
    outputCss: 'css/app.css?[hash:6]',
    // image-webpack-loader 的配置，详细描述参考：https://github.com/tcoopman/image-webpack-loader#usage
    imageWebpackLoader: {
      progressive: true,
      optimizationLevel: 7,
      interlaced: false,
      mozjpeg: {
        quality: 65
      },
      pngquant: {
        quality: '65-90',
        speed: 4
      },
      svgo: {
        plugins: [{
          removeViewBox: false
        }, {
          removeEmptyAttrs: false
        }]
      }
    }
  }
}
