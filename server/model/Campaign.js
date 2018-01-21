(function () {
	"use strict";
	const createError = require("http-errors");

	module.exports = function Constructor(params) {
		if (!params || !params.name || !params.email) {
			throw createError(400, "Invalid params to build a campaign");
		}
		return {
			"name": params.name,
			"email": params.email
		};
	}

}());