(function () {
    "use strict";

    const VueRouter = require("vue-router");
    module.exports = new VueRouter({
		"base": "/admin/",
		"routes": [{
			"path": "/",
			"redirect": "/home",
			"default": true
		}, {
			"name": "home",
			"path": "/home",
			"component": require("../components/home-panel.vue"),
			"meta": {
				"group":"system",
				"icon": require("@fortawesome/fontawesome-pro-light/faHome")
			}
		}, {
			"name": "campaignCreate",
			"path": "/campaign/create",
			"component": require("../components/campaign-create-panel.vue"),
			"meta": {
				"group":"campaign",
				"icon": require("@fortawesome/fontawesome-pro-light/faAlarmClock")
			}
		}, {
			"name": "userCampaignCreate",
			"path": "/campaign-users/create",
			"component": require("../components/user-campaign-create-panel.vue"),
			"meta": {
				"group": "campaignUsers",
				"icon": require("@fortawesome/fontawesome-pro-light/faAdjust")
			}
		}]
	});

}());