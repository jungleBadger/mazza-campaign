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
			"displayName": "Home",
			"group":"system",
			"icon": require("@fortawesome/fontawesome-pro-light/faHome"),
			"component": require("../components/home-panel.vue")
		}, {
			"name": "campaignCreate",
			"path": "/campaign/create",
			"displayName": "Create campaign",
			"group":"campaign",
			"icon": require("@fortawesome/fontawesome-pro-light/faAlarmClock"),
			"component": require("../components/campaign-create-panel.vue")

		}, {
			"name": "userCampaignCreate",
			"path": "/campaign-users/create",
			"displayName": "Create campaign user",
			"group": "campaign users",
			"icon": require("@fortawesome/fontawesome-pro-light/faAdjust"),
			"component": require("../components/user-campaign-create-panel.vue")
		}]
	});

}());