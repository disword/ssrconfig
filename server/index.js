const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const httpProxy = require('http-proxy-middleware')
const proxyConfig = require('../config/proxy')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  if (config.dev) {
    for (let key in proxyConfig) {
      console.log('key', key)
      let proxyItem = proxyConfig[key]
      let proxy = httpProxy(proxyItem)
      app.use(key, proxy)
    }
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
