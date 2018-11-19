<template>
	<div id="app">
		<nav>
			<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a href="#/" class="navbar-item">Recipes that Frank is Cookin'</a>
				</div>
			</nav>
		</nav>
		<div class="container">
			<div id="flow">
				<span class="flow-1"></span>
				<span class="flow-2"></span>
				<span class="flow-3"></span>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
	name: 'App'
}
</script>

<style>
body {
	background-color: #363636;
	color: whitesmoke;
	height: 100vh;
}

</style>