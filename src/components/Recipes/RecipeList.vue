<template>
		<div class="columns features">
			<div 
			v-for="recipe in sortedRecipes"
			:key="recipe.recipe_id"
			:value="recipe"
			class="column">
			<div class="card recipes__list-item">
			<div class="card-content">
				<div class="title">{{ recipe.name }}</div>
				<div class="card-image">
					<figure class="image">
						<img :src="recipe.image" alt="">
					</figure>
				</div>
					<div>Description: {{ recipe.description }}</div>
					<div>Prep-time: {{ recipe.prep }}</div>
					Labels: <span class="labels" v-for="(label, index) in recipe.label" :key="index">
						<span class="emoji" :class="label" v-tooltip="'High in ' + label"></span>
					</span>
					<div>Servings: {{ recipe.servings }}</div>
					<div>Cost: ${{ recipe.totalCost }}</div>
					<div>Cost per serving: ${{ (recipe.totalCost / recipe.servings).toFixed(2) || '--' }}</div>
					<div>
						<!-- <a @click="onEdit(recipe)" class="button is-danger is-rounded">Edit</a> -->
					<router-link 
						:to="{
							name: 'recipePage', 
							params: {recipe_name: recipe.name.replace(/\s+/g, '-')}
					}">
						<i class="button is-rounded is-primary">Full Recipe</i>
					</router-link>
					</div>
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
<style lang="scss">
	@import '../../assets/tooltip-styles';
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

	.emoji {
		&.protein::before {
			content: '\01F4AA';
		}
		&.fiber::before {
			content: '\01F4A9';
		}
		&.carbs::before {
			content: '\01F35D';
		}
		&.fire::before {
			content: '\01F525';
		}
	}
</style>
