(function () {
	"use strict";

	const mongo = new require("./mongo")();
	// const createError = require("http-errors");
	const CAMPAIGNS_COLLECTION = "campaings";
	const Campaign = require("../model/Campaign");

	module.exports = function () {
		return {
			"createCampaign": function (campaign) {
				return new Promise((resolve, reject) => {
					let newCampaign = new Campaign(campaign);
					mongo.connect().then((instance) => {
						mongo.insertOne(
							instance,
							CAMPAIGNS_COLLECTION,
							newCampaign
						).then((result) => {
							resolve(result);
						}).catch((err) => {
							reject(err);
						});
					}).catch((err) => {
						reject(err);
					});
				});
			}
		};
	};

}());