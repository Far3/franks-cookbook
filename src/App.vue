<template>
	<div id="app">
		<nav>
			<div class="nav-wrapper blue darken-4">
				<div class="brand-logo">Recipes that Frank is Cookin'</div>
			</div>
		</nav>
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
body {
	background-color: #e3f2fd;
	margin: 0;
}
.container {
	width: 80%;
}
</style>
