// 'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue' // page title
const port = 8888 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    // https: true,
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      'baidumap': {
        target: 'https://api.map.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          ['^/baidumap']: ''
        }
      }
    },
    // after: require('./mock/mock-server.js')
    before(){
      console.log('before')
    },
    after: (app, server) => {
      console.log('after')
    }
  },
  /*
    configureWebpack的配合有两种形式
    1.插件形式 2.函数形式
  */
  // configureWebpack: {
  //   // provide the app's title in webpack's name field, so that
  //   // it can be accessed in index.html to inject the correct title.
  //   name: name,
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   }
  // },
  configureWebpack: config => {
    config.name = name
    config.resolve.alias = {
      '@': resolve('src')
    }
    if (process.env.NODE_ENV === 'production') {
      // 去掉console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    config
      .when(process.env.NODE_ENV === 'production',
        config => {
        }
      )
    config
      .when(process.env.NODE_ENV === 'development',
        config => {
          // auto fix on save
          config.module
          .rule('eslint')
          .use('eslint-loader')
          .tap((options) => {
            options.fix = true
            return options
          })
        }
      )
  }
}
