<template>
  <div>
    <p>Hi from {{ name }}</p>
    <NuxtLink to="/" style="color: #ffffff; font-size: 30px;">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>
