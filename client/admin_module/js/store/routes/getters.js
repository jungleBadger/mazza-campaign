(function () {
	"use strict";

	module.exports = {
		"getRoutes": function (context) {
			return context.state.routes;
		},
		"getGroupedRoutes": function (context) {
			let routesDictionary = {};
			context.state.routes.forEach((route) => {
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
		}
	};

}());