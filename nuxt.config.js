const pkg = require('./package')
// const path = require('path')
// const vuxLoader = require('vux-loader')

const envConfig = require('./config/env')

module.exports = {
  // mode: 'spa',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** environment variables
  */
  env: {
    ...envConfig()
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  loadingIndicator: {
    color: '#3B8070'
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/global.scss',
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {
    //   src: '~/plugins/vux-plugins',
    //   ssr: false
    // },
    // {
    //   src: '~/plugins/vux-components',
    //   ssr: true
    // }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // With options
    ['@nuxtjs/proxy', { proxy: {
      '/rootApi': {
        target: 'https://120.27.21.67/t/icar/v1/auth/',
        // target: 'http://192.168.199.222:8083/icar/v1/auth/',
        // target: 'http://192.168.199.145:8080/icar/v1/auth/',
        // target: 'http://192.168.199.187:8083/icar/v1/auth/',
        // target: 'http://192.168.199.168:8083/icar/v1/auth/',
        secure: false,
        pathRewrite: {
          '^/rootApi': ''
        }
      },
      '/guestApi': {
        target: 'https://120.27.21.67/t/user/v1/guest/',
        // target: 'http://192.168.199.168:8083/icar/v1/guest/',
        // target: 'http://192.168.199.222:8083/icar/v1/guest/',
        // target: 'http://192.168.199.145:8080/icar/v1/guest/',
        secure: false,
        pathRewrite: {
          '^/guestApi': ''
        }
      },
      '/userApi': {
        target: 'https://120.27.21.67/t/user/v1/auth/',
        // target: 'http://192.168.199.222:8083/icar/v1/auth/',
        // target: 'http://192.168.199.145:8080/icar/v1/auth/',
        // target: 'http://192.168.199.187:8083/icar/v1/auth/',
        // target: 'http://192.168.199.168:8083/icar/v1/auth/',
        secure: false,
        pathRewrite: {
          '^/userApi': ''
        }
      }
    }}]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['~/static/polyfill.js'],
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        })
      }
      // const configs = vuxLoader.merge(config, {
      //   options: {
      //     ssr: true
      //   },
      //   plugins: ['vux-ui', {
      //     name: 'less-theme',
      //     path: path.join(__dirname, './assets/styles/theme.less')
      //   }]
      // })
      // return configs
    }
  },
  router: {
    middleware: 'auth'
  }
}
