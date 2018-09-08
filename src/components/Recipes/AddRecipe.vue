<template>
	<div>
		<h3>Add a Recipe</h3>
			<div class="card">
			<div class="card recipes__add-recipe">
				<div>
					Id:
					<input
					v-model="addRecipeData.recipe_id"
					class="validate"
					>
				</div>
				<div>
					Name:
					<input
					v-model="addRecipeData.name"
					class="validate"
					placeholder="Name"
					>
				</div>
				<div>
					Ingredients:
					<input
					v-model="addRecipeData.ingredients"
					class="validate"
					placeholder="Ingredients"
					>
				</div>
				<div>
					Servings:
					<input 
						v-model="addRecipeData.servings"
						class="validate"
						placeholder="Servings"
						type="number"
					>
				</div>
				<div>
					Cost:
					<input 
						v-model="addRecipeData.cost"
						class="validate"
						placeholder="Cost"
						type="number"
					>
				</div>
				<button class="btn btn-link">
					<i
					@click="onAdd()" 
					class="material-icons medium">
						add
					</i>
				</button>
			</div>
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
@media only screen and (min-width: 600px) {
		.recipes__list-item, .recipes__add-recipe{
		padding: 1rem;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
}

i.material-icons {
	cursor: pointer;
}
</style>
