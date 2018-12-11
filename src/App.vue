<template>
	<div id="app">
		<nav>
			<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<img :src="randomElementInArray(logos)" alt="">
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
			<div class="columns is-centered">
				<h3>Donate Below if this has been helpful</h3>
				<!-- PayPal Logo --><table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><a href="https://paypal.me/FranklynRoth" title="Donate"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" border="0" alt="PayPal Logo"></a></td></tr></table><!-- PayPal Logo -->
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VTooltip from 'v-tooltip'
 
Vue.use(VTooltip)
Vue.use(Buefy)

export default {
	name: 'App',
	computed: {
		pickRandomLogo: () => {
			const logos = [
				'https://render.bitstrips.com/v2/cpanel/4b1f7b73-fb7e-4039-b2d1-802f72fcb13a-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/bdcf6539-95ae-4e66-a758-5b8b54f71b05-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/dc37abad-6e41-4465-981a-7d0635edfd39-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1'
			]
			this.randomElementInArray(logos);
		}
	},
	methods: {
		randomNumber: function(logos) {
			return Math.floor(Math.random() * Math.floor(this.logos.length));
		},
		randomElementInArray: function (array) {
			return array[this.randomNumber(0,array.length)];
		}
	},
	data: function () {
		return {
			logos: [
				'https://render.bitstrips.com/v2/cpanel/4b1f7b73-fb7e-4039-b2d1-802f72fcb13a-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/bdcf6539-95ae-4e66-a758-5b8b54f71b05-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/dc37abad-6e41-4465-981a-7d0635edfd39-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/0dc5ffa2-6a92-45f3-a1cc-5a37b6485ab5-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/1bf2b9d6-1622-498b-a2c0-af5431b08aa8-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1',
				'https://render.bitstrips.com/v2/cpanel/aea6bdba-1a37-4813-9b43-52b9561a94d5-138e7d1e-9540-4fe6-ba68-52f9c5a40651-v1.png?transparent=1&palette=1'
			]
		}
	}
}
</script>

<style>
#app {
	background-color: #363636;
	color: whitesmoke;
}
img	{
	width: 150px;
	height: 150px;
}

</style>