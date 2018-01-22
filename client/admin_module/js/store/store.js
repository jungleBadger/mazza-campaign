(function () {
	"use strict";

	const Vuex = require("vuex");
	module.exports = new Vuex.Store({
		"modules": {
			"routes": require("./routes/module"),
			"utilities": require("./utilities/module"),
		}
	});

}());