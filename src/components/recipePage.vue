<template>
	<section>
		<div v-if="loaded">
			<section class="section is-dark">
				<div class="card">
					<div class="card-image">
						<figure class="image">
						<img :src="image" alt="Placeholder image">
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
						<div class="media-content">
							<p class="title is-4">{{ name }}</p>
							<p class="subtitle is-6">{{ description }}</p>
						</div>
						</div>
						<div class="content">
							<nav class="panel">
								<p class="panel-heading">
									Ingredients
								</p>
								<label v-for="(ingredient, i) in ingredients" :key="i" class="panel-block columns">
									<div class="column">
										<b-checkbox>
											{{ ingredient.ingredient }}
										</b-checkbox>
									</div>
									<div class="column">
										Aisle: {{ ingredient.aisle }}
									</div>
									<div class="column">
										Cost: {{ ingredient.cost }}
									</div>
								</label>
							</nav>
						</div>
					</div>
				</div>
			</section>
			<section class="how-to">
				<div class="card">
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4">How-To</p>
							</div>
						</div>
						<div class="card-image">
							<figure class="image">
								<img :src="howto" alt="How-to gif">
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div v-else>
			<h1>Not food yet...🥒</h1>
		</div>
	</section>
</template>

<script>
import db from '../db';
export default {
	name: 'recipePage',
	data() {
		return {
			name: '',
			ingredients:[
				{ ingredient: '', aisle: '', cost: ''}
			],
			servings: 0,
			cost: 0,
			aisle: 0,
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
				const { name, ingredients, servings, cost, image, description, howto } = doc.data();
				this.name = name;
				this.ingredients = ingredients;
				this.servings = servings;
				this.cost = cost;
				this.image = image;
				this.description = description;
				this.howto = howto;
			})
			this.loaded = true;
		})
	}
}
</script>

<style scoped>

</style>
