import hypernova from 'hypernova/server'
import { renderVue, Vue } from 'hypernova-vue/server'
import express from 'express'
import path from 'path'

import Product from './components/Product.vue'

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent (name) {
    if (name === 'Product') {
      return renderVue(name, Vue.extend(Product))
    }
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
