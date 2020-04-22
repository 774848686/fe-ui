const path = require('path');
module.exports = {
  publicPath: './',
  lintOnSave:false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'package')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      })
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: (config) => {
    config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      })
  }
}
