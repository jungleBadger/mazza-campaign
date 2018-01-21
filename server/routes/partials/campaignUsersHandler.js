(function () {
	"use strict";

	const users = new require("../../helpers/campaignUsers")();

	module.exports = function (app) {
		app.post("/createCampaignUser", function (req, res) {
			users.createCampaignUser(req.body.user).then((result) => {
				return res.status(200).send(result);
			}).catch((err) => {
				return res.status(err.status || 500).send(err.message || err);
			});
		});

		app.get("/queryCampaignUser", function (req, res) {
			users.querySingleUser(req.query.userEmail).then((result) => {
				return res.status(200).send(result);
			}).catch((err) => {
				return res.status(err.status || 500).send(err.message || err);
			});
		});
	}
}());