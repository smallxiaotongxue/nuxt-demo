<template>
	<div class="container">
		<h2>Users</h2>
		<ul class="users">
			<li v-for="user in users" :key="user.id">
				<NuxtLink :to="'/users/' + user.id">{{ user.name }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    async asyncData (ctx) {
      const { data } = await ctx.$axios.get("https://jsonplaceholder.typicode.com/users");
    return {
			users: data,
      name: ctx.req ? 'server' : 'client'
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
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
