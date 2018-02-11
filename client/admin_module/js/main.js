(function () {
	"use strict";

	if (!Array.prototype.find) { Array.prototype.find = require("../../etc/js/polyfills").find; }
	if (!window.Promise) { window.Promise = require("promise-polyfill"); }

	const Vue = require("vue");
	Vue.use(require("vuex"));
	Vue.use(require("vue-router"));
	Vue.use(require("vue-i18n"));

	require("@fortawesome/fontawesome");

	Vue.component("FontAwesomeIcon", require("@fortawesome/vue-fontawesome").FontAwesomeIcon);

	new Vue({
		"el": "#app",
		"name": "admin",
		"store": require("./store/store"),
		"router": require("./router/index"),
		"i18n": require("./i18n/configs"),
		"render": function (h) {
			return h(require("./components/app.vue"));
		}
	});

}());