(function () {
	"use strict";

	const mongo = new require("./mongo")();
	const createError = require("http-errors");
	const CAMPAIGNS_COLLECTION = "campaigns";
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
			},
			"queryCampaign": function (params) {
				return new Promise((resolve, reject) => {
					if (!params || !params.query || typeof params.query !== "object") {
						return reject(createError(400, "Invalid params to query campaign"));
					}
					if (params.query._id) {
						params.query._id = mongo.ObjectId(params.query._id);
					}
					mongo.connect().then((instance) => {
						mongo.findOne(
							instance,
							CAMPAIGNS_COLLECTION, {
								"query": params.query,
								"projection": params.projection
							}
						).then((result) => {
							resolve(result);
						}).catch((err) => {
							reject(err);
						});
					}).catch((err) => {
						reject(err);
					});
				});
			},
			"deleteCampaign": function (campaignId) {
				return new Promise((resolve, reject) => {
					if (!campaignId) {
						return reject(createError(400, "Invalid params to delete campaign"));
					}
					mongo.connect().then((instance) => {
						mongo.deleteOneById(
							instance,
							CAMPAIGNS_COLLECTION,
							campaignId
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