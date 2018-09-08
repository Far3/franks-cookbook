<template>
	<div>
		<h3>Recipes</h3>
		<div 
		v-for="recipe in sortedRecipes"
		:key="recipe.recipe_id"
		:value="recipe"
		class="collection">
		<div 
			v-if="editId === recipe.recipe_id" 
			class="collection-item recipes__list-item"
			:class="{ 'yellow lighten-4': editId === recipe.recipe_id }">
			<div>
				<input class="validate" v-model="editRecipeData.recipe_id">
			</div>
			<div>
				<input class="validate" v-model="editRecipeData.name">
			</div>
			<div>
				<input class="validate" v-model="editRecipeData.ingredients">
			</div>
			<div>
				<input class="validate" v-model="editRecipeData.servings">
			</div>
			<div>
				<input class="validate" v-model="editRecipeData.cost">
			</div>
			<div>
				<i @click="onEditSubmit()" class="material-icons small">check</i>
				<i @click="onCancel()" class="material-icons small">cancel</i>
			</div>
		</div>
		<div
		v-else
		class="collection-item recipes__list-item">
			<div>{{ recipe.recipe_id }}</div>
			<div>{{ recipe.name }}</div>
			<div>Ingredients: {{ recipe.ingredients }}</div>
			<div>Servings: {{ recipe.servings }}</div>
			<div>Cost: ${{ recipe.cost }}</div>
			<div>Cost per serving: ${{ recipe.cost / recipe.servings }}</div>
			<div>
				<i @click="onEdit(recipe)" class="material-icons small">mode_edit</i>
			<router-link 
				:to="{
					name: 'recipePage', 
					params: {recipe_name: recipe.name.replace(/\s+/g, '-')}
			}">
				<i class="material-icons small">search</i>
			</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {
	name: 'RecipeList',
	props: [
		'editId',
		'editRecipeData',
		'onCancel',
		'onDelete',
		'onEdit',
		'onEditSubmit',
		'sortedRecipes'
	]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 600px) {
	.recipes__list-item, .recipes__add-recipe{
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
}

i.material-icons {
	cursor: pointer;
}
</style>
