const { resolve } = require('path')

module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  srcDir: __dirname,
  buildDir: resolve(__dirname, '.nuxt'),

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'app2',
    description: 'My PWA App'
  },

  // Framework7 Config
  framework7: {
    css: true,
    f7Icons: false,
    mdIcons: false,
    pwa: true
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css',
  ],


  plugins: [
    'plugins/icons.js'
  ],

  proxy: [
    'http://localhost:3000/api'
  ]
}
