<template>
	<nav id="header" class="navbar is-dark" role="navigation" aria-label="alternative navigation">
		<div class="navbar-brand">
			<a href="/admin" class="navbar-item">
				<img data-v-96b41898="" src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
			</a>
			<div
				class="navbar-burger burger"
				@click="toggleMenu"
				:class="{'is-active': menuOpen}"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div
			id="navbarExampleTransparentExample"
			class="navbar-menu"
			:class="{'is-active': menuOpen}">
			<div class="navbar-start">
				<div
					role="navigation" aria-label="main navigation"
					class="navbar-item"
					@click="toggleMenu"
					v-for="(groupRoutes, group) in groupedRoutes">
					<template v-if="groupRoutes.length">
						<p class="menu-label">
							{{group}}
						</p>
					</template>
					<router-link
						v-for="route in groupRoutes"
						:to="route.path"
						:key="route.name"
						class="navbar-link"
						:class="{'is-active': selectedRoute === route.name}">
						<font-awesome-icon :icon="route.icon" />
						<span class="route-name">
							{{route.displayName}}
						</span>
					</router-link>
				</div>
			</div>
			<div class="navbar-end">
				<div class="navbar-dropdown">
					<hr class="navbar-divider">
					<div class="navbar-item">
						<a class="button is-danger">
							<span class="icon">
								<font-awesome-icon :icon="logoutIcon" />
							</span>
							<span>Logout</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script type="text/javascript">
	(function () {
		"use strict";
		module.exports = {
			"name": "AppHeader",
			"props": {},
			"data": function () {
				return {
					"menuOpen": false
				}
			},
			"computed": {
				"groupedRoutes": function () {
					return this.$store.getters["routes/getGroupedRoutes"];
				},
				"selectedRoute": function () {
					return this.$route.name;
				},
				"menuIcon": function () {
					return require("@fortawesome/fontawesome-pro-light/faBars");
				},
				"logoutIcon": function () {
					return require("@fortawesome/fontawesome-pro-light/faSignOut");
				}
			},
			"components": {},
			"methods": {
				"toggleMenu": function () {
					this.menuOpen = !this.menuOpen;
				}
			}
		};
	}());
</script>
<style scoped>
	#header {
		width: 100%;
		z-index: 5;
		height: 60px;
		box-sizing: border-box;
	}

	.navbar-brand {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	/*.navbar-brand> .logo-area {*/
		/*height: 100%;*/
		/*display: flex;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		/*padding: 0 10px;*/
	/*}*/

</style>