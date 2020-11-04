import bodyParser from 'body-parser'
import session from 'express-session'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/globalPlugins',
    // '@/plugins/axios',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
  // 当我们使用axios发送请求时
  // 如果你使用axios发送请求且路径是/helo/hello,
  // 那么会被axios中的prefix属性加上前缀,即/app/helo/helo
  // 而proxy会使得请求变为，http://127.0.0.1:8080/app/helo/helo
  // 而pathRewrite会把请求变为 http://127.0.0.1:8080/test/helo/helo
  // axios: {
  //   prefix: '/app',  //在请求路径前，加上 /app
  //   proxy: true
  // },
  // proxy: {
  //   '/app': {
  //     target: 'http://127.0.0.1:8080', //页面仍然显示 http://localhost:3000,但实际上是
  //     //http://127.0.0.1:8080
  //     pathRewrite: {'^/app': '/test'}    //前面是一个正则表达式,后面是替换后的内容
  //   }
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  // 路由中间件
  router: {
    middleware: ['visits', 'user-agent'],

		// 路由配置
		extendRoutes (routes, resolve) {
			const indexIndex = routes.findIndex(route => route.name === 'NamedViews');
			// console.log("[routes]:",routes);
			if (indexIndex) {
				let index = routes[indexIndex].children.findIndex(route => route.name === 'NamedViews-child-id');
				routes[indexIndex].children[index] = {
					...routes[indexIndex].children[index],
					components: {
						default: routes[indexIndex].children[index].component,
						left: resolve(__dirname, 'components/childLeft.vue')
					},
					chunkNames: {
						left: 'components/childLeft'
					}
				}
			}


			// index = routes.findIndex(route => route.name === 'main')
			// routes[index] = {
			// 	...routes[index],
			// 	components: {
			// 		default: routes[index].component,
			// 		top: resolve(__dirname, 'components/mainTop.vue')
			// 	},
			// 	chunkNames: {
			// 		top: 'components/mainTop'
			// 	}
			// }
		}
  },

	/*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
	serverMiddleware: [
		// body-parser middleware
		bodyParser.json(),
		// session middleware
		session({
			secret: 'super-secret-key',
			resave: false,
			saveUninitialized: false,
			cookie: { maxAge: 60000 }
		}),
		// Api middleware
		// We add /api/login & /api/logout routes
		'~/api'
	]
}
