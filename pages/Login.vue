<template>
	<div class="container">
		<h2>登录---鉴权页</h2>


		<h1>Please login to see the secret content</h1>
		<form v-if="!$store.state.authUser" @submit.prevent="login">
			<p v-if="formError" class="error">
				{{ formError }}
			</p>
			<p>
				<i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i>
			</p>
			<p>
				Username: <input v-model="formUsername" type="text" name="username" />
			</p>
			<p>
				Password:
				<input v-model="formPassword" type="password" name="password" />
			</p>
			<button type="submit">
				Login
			</button>
		</form>
		<div v-else>
			Hello {{ $store.state.authUser.username }}!
			<pre>I am the secret content, I am shown only when the user is connected.</pre>
			<p><i>You can also refresh this page, you'll still be connected!</i></p>
			<button @click="logout">
				Logout
			</button>
		</div>
		<p>
			<NuxtLink to="/secret">Super secret page</NuxtLink>
			<el-button size="small" type="primary" @click="toHome">跳转首页</el-button>
		</p>
	</div>
</template>

<script>
export default {
	transition: "bounce",
	data() {
		return {
			formError: null,
			formUsername: "",
			formPassword: ""
		};
	},
	methods: {
		toHome() {
			this.$router.push("/");
		},
		async login() {
			try {
				await this.$store.dispatch("login", {
					username: this.formUsername,
					password: this.formPassword
				});
				this.formUsername = "";
				this.formPassword = "";
				this.formError = null;
			} catch (e) {
				this.formError = e.message;
			}
		},
		async logout() {
			try {
				await this.$store.dispatch("logout");
			} catch (e) {
				this.formError = e.message;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.error {
	color: red;
}
</style>
