<template>
	<div id="mazza-app">
		<app-header />
		<app-sidemenu />
		<div class="content">
			<transition
				mode="out-in"
				:duration="500"
				enter-active-class="animated fadeInRight"
				leave-active-class="animated fadeOutLeft">
				<router-view class="view" />
			</transition>
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
			"methods": {
			},
			"computed": {
			},
			"beforeCreate": function () {
				this.$store.commit("i18n/setLanguages", {
					"availableLanguages": Object.keys(this.$i18n.messages),
					"selectedLanguage": this.$i18n.locale
				});
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
