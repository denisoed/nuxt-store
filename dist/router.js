import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41b2826e = () => interopDefault(import('../src/pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _7de91d6f = () => interopDefault(import('../src/pages/Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _76ba6956 = () => interopDefault(import('../src/pages/Product.vue' /* webpackChunkName: "pages/Product" */))
const _6ba378c2 = () => interopDefault(import('../src/pages/Shop.vue' /* webpackChunkName: "pages/Shop" */))
const _540b0399 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Cart",
    component: _41b2826e,
    name: "Cart"
  }, {
    path: "/Checkout",
    component: _7de91d6f,
    name: "Checkout"
  }, {
    path: "/Product",
    component: _76ba6956,
    name: "Product"
  }, {
    path: "/Shop",
    component: _6ba378c2,
    name: "Shop"
  }, {
    path: "/",
    component: _540b0399,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
