<template>
	<div>
		<!-- <AddRecipe 
			:addRecipeData="addRecipeData"
			:onAdd="onAdd"
		/> -->
		<hero />
		<RecipeList
			:editId="editId"
			:editRecipeData="editRecipeData"
			:onCancel="onCancel"
			:onDelete="onDelete"
			:onEdit="onEdit"
			:onEditSubmit="onEditSubmit"
			:sortedRecipes="sortedRecipes"
		/>
	</div>
</template>

<script>
import db from '@/db';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';
import hero from '../hero';

export default {
	name: 'Recipes',
	data () {
		return {
			recipes: [],
			addRecipeData: {
				recipe_id: Math.random(),
				name: '',
				label: [],
				description: '',
				ingredients: [
					{ ingredient: '', aisle: '', cost: '' }
				],
				nutrition: [
					{ fat: 0, carbs:0, protien: 0 },
					{ calories: 0 }
				],
				servings: 0,
				totalCost: 0
			},
			editId: '',
			editRecipeData: {
				recipe_id: 0,
				name: '',
				label: [],
				description: '',
				ingredients: [
					{ ingredient: '', aisle: '', cost: '' }
				],
				nutrition: [
					{ fat: 0, carbs:0, protien: 0 },
					{ calories: 0 }
				],
				servings: 0,
				totalCost: 0
			}
		}
	},
	components: {
		AddRecipe,
		RecipeList,
		hero
	},
	computed: {
		sortedRecipes() {
			return this.recipes.slice().sort((a, b) => {
				return a.recipe_id - b.recipe_id;
			});
		}
	},
	created() {
		this.getRecipes();
	},
	methods: {
		getRecipes() {
			db.collection('recipes').get().then(querySnapshot => {
				const recipes = [];
				querySnapshot.forEach(doc => {
					recipes.push(doc.data());
				})
				this.recipes = recipes
			});
		},
		onAdd() {
			db.collection('recipes').add(this.addRecipeData).then(this.getRecipes());
		},
		onDelete (recipe_id) {
			db.collection('recipes')
			.where('recipe_id', '==', recipe_id)
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					doc.ref.delete().then(this.getRecipes());
				})
			})
		},
		onEdit(recipe) {
			this.editId = recipe.recipe_id;
			this.editRecipeData.name = recipe.name;
			this.editRecipeData.ingredients = recipe.ingredients;
			this.editRecipeData.servings = recipe.servings;
			this.editRecipeData.cost = recipe.cost
		},
		onCancel() {
			this.editId = '';
			this.editRecipeData.name = '';
			this.editRecipeData.ingredients = '';
			this.editRecipeData.servings = 0;
			this.editRecipeData.cost = 0
		},
		onEditSubmit() {
			db.collection('recipes')
				.where('recipe_id', '==', this.editId)
				.get()
				.then(querySnapshot => {
					querySnapshot.forEach(doc => {
						doc.ref.set({
							recipe_id: this.editId,
							name: this.editRecipeData.name,
							ingredients: this.editRecipeData.ingredients,
							servings: this.editRecipeData.servings,
							cost: this.editRecipeData.cost
						}).then(this.getRecipes)
					})
					this.onCancel();
				})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
