<template>
	<div id="mazza-app">
		<app-header></app-header>
		<app-sidemenu></app-sidemenu>
		<div class="content">
			<router-view class="view" />
		</div>
	</div>
</template>
<script type="text/javascript">
	(function() {
		"use strict";

		module.exports = {
			"props": [],
			"name": "MazzaApp",
			"data": function() {
				return {
				}
			},
			"components": {
				"AppHeader": require("./app-header.vue"),
				"AppSidemenu": require("./app-sidemenu.vue")
			},
			"beforeMount": function () {
				this.$store.commit("routes/initRoutes", this.$router.options.routes);
			},
			"methods": {
			},
			"computed": {
			}
		};
	}());
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	$primary-color: #333;

	#mazza-app {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		color: $primary-color;
	}

	.content {
		flex: 10;
		background-color: white;
		height: calc(100% - 60px);
		min-width: 70%;
	}

	.view {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 5px;
	}

</style>
