<template>

  <ul>
		<NuxtLink to="/" class="button--green">Root</NuxtLink>
    <li v-for="(visit, index) in visits" :key="index">
      <i>{{ visit.date | hours }}</i> - {{ visit.path }}
    </li>
  </ul>
</template>

<script>
export default {
  filters: {
    hours (date) {
      return date.split(' ')[1]
    }
  },
  computed: {
    visits () {
      return this.$store.state.visits.slice().reverse()
    }
  }
}
</script>

<style scoped>
ul {
  position: fixed;
  top: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto;
  list-style-type: none;
}
ul li {
  padding: 2px 0;
}
ul li i {
  color: gray;
  font-style: normal;
}
</style>
