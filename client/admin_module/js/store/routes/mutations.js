(function () {
	"use strict";

	let types = require("./constants/mutation-types");

	module.exports = {
		[types.INIT_ROUTES]: function (context, routes) {
			context.state.routes = routes;
		},
		[types.ADD_ROUTE]: function (context, route = {}) {
			context.state.routes.push(route);
		}
	};

}());