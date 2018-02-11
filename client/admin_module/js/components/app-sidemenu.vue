<template><aside id="sidemenu" class="menu">
	<div
		class="nav-wrapper"
		role="navigation"
		aria-label="main navigation">
		<div
			class="menu-item"
			v-for="(groupRoutes, group) in groupedRoutes">
			<template v-if="groupRoutes.length">
				<i18n
					:path="`appRoutes.groups.${group}`"
					class="menu-label"
					tag="p"
					:locale="selectedLanguage"
				/>
			</template>
			<div class="menu-list">
				<router-link
					v-for="route in groupRoutes"
					:to="route.path"
					:key="route.name"
					:class="{'is-active': selectedRoute === route.name}">
					<font-awesome-icon :icon="route.meta.icon" />

					<i18n
						:path="`appRoutes.${route.name}`"
						class="route-name"
						:locale="selectedLanguage"
					/>
				</router-link>
			</div>
		</div>
	</div>
	<div class="menu-item">
		<a class="button is-danger">
			<span class="icon">
				<font-awesome-icon :icon="logoutIcon" />
			</span>
			<span>Logout</span>
		</a>
	</div>
	</aside>
</template>

<script type="text/javascript">
    (function () {
        "use strict";

		const i18nGetters = require("../store/i18n/mappers/mapGetters");

		module.exports = {
            "name": "AppSidemenu",
            "props": {},
            "data": function () {
                return {}
            },
			"computed": {
				groupedRoutes() {
					let routesDictionary = {};
					this.$router.options.routes.forEach((route) => {
						if (!route.default) {
							if (route.meta && route.meta.group) {
								if (routesDictionary[route.meta.group]) {
									routesDictionary[route.metagroup].push(route);
								} else {
									routesDictionary[route.meta.group] = [route];
								}
							} else {
								if (routesDictionary.other) {
									routesDictionary.other.push(route);
								} else {
									routesDictionary.other = [route];
								}
							}
						}
					});
					return routesDictionary;
				},
				selectedRoute() {
					return this.$route.name;
				},
				logoutIcon() {
					return require("@fortawesome/fontawesome-pro-light/faSignOut");
				},
				...i18nGetters
			},
            "components": {},
            "methods": {}
        };
    }());
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	$shadow-color: #e9e9e9;
	#sidemenu {
		height: calc(100% - 60px);
		min-width: 100px;
		flex: 2;
		display: flex;
		flex-direction: column;
		user-select: none;
		z-index: 1;
		background-color: #EDF2F5;
		box-shadow: 0 2px 5px 1px $shadow-color;
		@media screen and (max-width: 1024px) {
			display: none;
		}
	}

	.nav-wrapper {
		flex: 1;
	}

	.menu-item {
		margin: 10px 5px;
	}

	.menu-label {
		font-weight: 600;
	}



</style>