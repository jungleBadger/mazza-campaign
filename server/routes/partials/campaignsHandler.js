(function () {
	"use strict";

	const campaigns = new require("../../helpers/campaigns")();

	module.exports = function (app) {
		app.post("/createCampaign", function (req, res) {
			campaigns.createCampaign(req.body.campaign).then((result) => {
				return res.status(200).send(result);
			}).catch((err) => {
				return res.status(err.status || 500).send(err.message || err);
			});
		});


	}
}());