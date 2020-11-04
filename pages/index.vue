<template>
  <div class="container">
    <div class="index-page">
      <Logo />
      <h1 class="title">
        nuxt-模板
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">GitHub</a>

        <NuxtLink to="/about" class="button--grey">Layout page</NuxtLink>
				<NuxtLink to="/namedViews" class="button--grey">NamedRoute Views</NuxtLink>
				<NuxtLink to="/User" class="button--grey">Route Views</NuxtLink>
        <NuxtLink to="/login" class="button--grey">登录鉴权-transition page</NuxtLink>
        <NuxtLink to="/Transition" class="button--grey">Transition-2 page</NuxtLink>
        <NuxtLink to="/posts" class="button--grey">异步数据 page</NuxtLink>
        <NuxtLink to="/VuexDemo" class="button--grey">VuexStore page</NuxtLink>
      </div>



    </div>

  </div>
</template>

<script>
export default {

    async asyncData(ctx) {
        const { data } = await ctx.$axios.get("https://jsonplaceholder.typicode.com/users");
        return { users: data };
    },

    // data() {
    //     return { project: 'default' }
    // },
    // asyncData(context) {
    //     return { project: 'nuxt' }
    // }

    // fetch({ store, params }) {
    //     return axios.get('http://my-api/stars').then(res => {
    //         store.commit('setStars', res.data)
    //     })
    // }

    // head() {
    //     return {
    //         title: this.title,
    //         meta: [
    //             {
    //                 hid: 'description',
    //                 name: 'description',
    //                 content: 'My custom description'
    //             }
    //         ]
    //     }
    // }

    // key(route) {
    //     return route.fullPath
    // }

    // layout: 'blog',
    // // 或
    // layout(context) {
    //     return 'blog'
    // }

    // loading: false

    // middleware: 'authenticated'

    // scrollToTop: true

    // // 可以是字符
    // transition: ''
    // // 或对象
    // transition: {}
    // // 或函数
    // transition (to, from) {}

    // async validate({ params, query, store }) {
    //     // await operations
    //     return true // 如果参数有效
    //     return false // 将停止Nuxt.js呈现页面并显示错误页面
    // }

    // watchQuery: ['page']
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.index-page {
	padding: 0 180px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
