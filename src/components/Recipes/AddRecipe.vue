<template>
	<div>
		<h3>Add a Recipe</h3>
			<div class="card">
			<div class="card recipes__add-recipe">
				<div>
					Name:
					<input
					v-model="addRecipeData.name"
					class="validate"
					placeholder="Name"
					>
				</div>
				<div>
					Description:
					<input
					v-model="addRecipeData.description"
					class="validate"
					placeholder="Description"
					>
				</div>
				<div>
					Ingredients:
					<input
					v-model="addRecipeData.ingredients.ingredient"
					class="validate"
					placeholder="Ingredient"
					>
				</div>
				</div>
				<button class="btn btn-link">
					<i
					@click="onAdd()" 
					class="button is-rounded is-primary">
						add
					</i>
				</button>
			</div>
		</div>
</template>

<script>
import db from '@/db';

export default {
	name: 'AddRecipe',
	props: [
		'addRecipeData',
		'onAdd'
	]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
