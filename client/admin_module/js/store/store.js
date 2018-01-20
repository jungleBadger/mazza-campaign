(function () {
	"use strict";

	const Vuex = require("vuex");
	module.exports = new Vuex.Store({
		"modules": {
			"utilities": require("./utilities/module"),
		}
	});

}());