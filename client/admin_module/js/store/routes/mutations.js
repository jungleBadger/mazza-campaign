(function () {
	"use strict";

	module.exports = {
		"initRoutes": function (context, routes) {
			context.state.routes = routes;
		},
		"addRoute": function (context, route = {}) {
			context.state.routes.push(route);
		}
	}

}());