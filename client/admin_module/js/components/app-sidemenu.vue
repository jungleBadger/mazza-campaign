<template>
    <aside id="sidemenu" class="menu">
		<div
			class="menu-item"
			v-for="(groupRoutes, group) in routes">
			<template v-if="groupRoutes.length">
				<p class="menu-label">
					{{group}}
				</p>
			</template>

			<div class="menu-list">
				<router-link
					v-for="route in groupRoutes"
					:to="route.path"
					:key="route.name"
					:class="{'is-active':selectedRoute === route.name}">
					<font-awesome-icon :icon="route.icon" />
					<span>{{route.displayName}}</span>
				</router-link>
			</div>
		</div>
	</aside>
</template>

<script type="text/javascript">
    (function () {
        "use strict";
        module.exports = {
            "name": "AppSidemenu",
            "props": {},
            "data": function () {
                return {}
            },
			"computed": {
				"routes": function () {
					let routesDictionary = {};
					this.$router.options.routes.forEach((route) => {
						if (!route.default) {
							if (route.group) {
								if (routesDictionary[route.group]) {
									routesDictionary[route.group].push(route);
								} else {
									routesDictionary[route.group] = [route];
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
				"selectedRoute": function () {
					return this.$route.name;
				}
			},
            "components": {},
            "methods": {}
        };
    }());
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	#sidemenu {
		height: calc(100% - 60px);
		width: 15%;
		display: flex;
		flex-direction: column;
	}

	.menu-item {
		margin: 10px 5px;
	}
</style>