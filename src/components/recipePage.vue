<template>
	<div>
		<div v-if="loaded">
			<h1>{{ name }}</h1>
			<h2>{{ ingredients }}</h2>
		</div>
		<div v-else>
			<h1>Loading...</h1>
		</div>
	</div>
</template>

<script>
import db from '../db';
export default {
	name: 'recipePage',
	data() {
		return {
			name: '',
			ingredients: '',
			servings: 0,
			cost: 0,
			loaded: false
		}
	},
	beforeCreate() {
		db.collection('recipes')
		//.replace(/\s+/g, '-')
		.where('name', '==', this.$route.params.recipe_name.replace(/-/g, ' '))
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				const { name, ingredients, servings, cost } = doc.data();
				this.name = name;
				this.ingredients = ingredients;
				this.servings = servings;
				this.cost = cost;
			})
			this.loaded = true;
		})
	}
}
</script>

<style scoped>

</style>
