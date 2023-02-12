import axios from 'axios'
export default {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
     ** Customize the progress-bar color
     */
  loading: '~/components/spinner/loader.vue',
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [
    { src: '~/plugins/date.js', ssr: false },
    { src: '~/plugins/money.js', ssr: true },
    { src: '~/plugins/spinner.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/cart.js', ssr: false },
    { src: '~/plugins/vue-slider-component.js', ssr: false },
    { src: '~/plugins/notification.js', ssr: false },
    { src: '~/plugins/vue-paginate.js', ssr: false },
    { src: '~/plugins/auth.js', ssr: false },
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false },
    { src: '~/plugins/vue-viewport.js', ssr: false },
    { src: '~/plugins/vue-magnifier.js', ssr: false },
    { src: '~/plugins/vue-rate.js', ssr: false },
    { src: '~/plugins/vue-social-sharing.js', ssr: false }
  ],
  /**
     * Load Css
     */
  css: [
    { src: 'vue-slider-component/theme/default.css', lang: 'css' }
  ],
  purgeCSS: {
    enabled: false
  },
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
     ** Nuxt.js modules
     */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-lazy-load', [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['index', 'auth']
      }
    ],
    'cookie-universal-nuxt'
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'components/error/404.vue')
      })
    }
  },
  /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
  axios: {
    baseURL: 'https://app.pamalengke.ph'
  },
  /**
     * PWA Configuration
     */
  pwa: {
    manifest: {
      name: 'Pamalengke'
    }
  },
  /*
     ** Build configuration
     */
  build: {
    transpile: ['vee-validate/dist/rules', 'nuxt-vuex-localstorage'],
    /*
         ** You can extend webpack config here
         */
    extend (config, ctx) {}
  },
  generate: {
    interval: 2000,
    routes (callback) {
      axios
        .get('https://app.pamalengke.ph/api/public/product-department', {
          params: {
            include: 'product_categories.product_sub_categories'
          }
        })
        .then((res) => {
          const response = res.data.data
          const routes = []
          for (let i = 0; i < response.length; i++) {
            const categories = response[i].product_categories.data
            for (let j = 0; j < categories.length; j++) {
              const sub = categories[j].product_sub_categories.data
              for (let k = 0; k < sub.length; k++) {
                routes.push('/products/' + categories[j].slug + '/' + sub[k].id)
              }
              routes.push('/products/' + categories[j].slug)
            }
          }
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
