(function () {
    "use strict";

    const VueRouter = require("vue-router");
    module.exports =  new VueRouter({
		"routes": [{
			"path": "/foo",
			"component": require("../components/foo.vue")
		}, {
			"path": "/bar",
			"component": require("../components/bar.vue")
		}]
	});

}());