(function () {
	"use strict";

	const mapGetters = require("Vuex").mapGetters;
	const getters = require("../getters");

	module.exports = mapGetters(getters);

}());