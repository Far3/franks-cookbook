import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/Recipes/Recipes';
import recipePage from '@/components/recipePage'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'Recipes',
		component: Recipes
	},
	{
		path: '/:recipe_name',
		name: 'recipePage',
		component: recipePage
	}
	]
})
