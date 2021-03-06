export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'Inventam',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' },
    ],



    
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
      // },
    ],
    script: [
      {
        // src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'static/css/bootstrap.min.css',
    'static/css/style.css',
    "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src:"~/plugins/aos",ssr:false}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  
  },
}
