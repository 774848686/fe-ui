const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('examples')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('./build/md-loader/index.js')
      .loader('./build/md-loader/index.js')
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
