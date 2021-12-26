<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<a class="navbar-brand" href="/">Plusauth Starter</a>
			<div class="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul class="navbar-nav mr-auto"></ul>
				<template v-if="auth.user">
					<li class="nav-item navbar-nav">
						<router-link class="nav-link" to="/profile">{{ `Logged in as: ${auth.user.profile.username}` }}</router-link>
					</li>
					<button class="btn btn-link" @click="logout">Logout</button>
				</template>
				<li v-else class="nav-item navbar-nav">
					<button class="btn btn-link" @click="login">Login</button>
				</li>
			</div>
		</nav>
	</header>
</template>

<script>
import auth from '../auth/index'
import userManager from '../auth/userManager'
export default {
	/* We can't extract user object from auth since header is rendered before
    Router.beforeEach runs (which is where the auth check is done). 
    This way when auth.user is set, the view will react to it. */
	data() {
		return {
			auth
		}
	},
	methods: {
		logout() {
			userManager.signoutRedirect()
		},
		login() {
			userManager.signinRedirect()
		}
	}
}
</script>
