(function () {
    "use strict";

    const mongo = new require("./mongo")();
    const CampaignUser = require("../model/CampaignUser");
    const CAMPAIGN_USER_COLLECTION = "campaign_users";
    const createError = require("http-errors");

    module.exports = function () {
		return {
			"createCampaignUser": function (user) {
				return new Promise((resolve, reject) => {
					let newUser = new CampaignUser(user);
					mongo.connect().then((instance) => {
						this.checkCampaignUserExistence(newUser.email).then((userExists) => {
							if (!userExists) {
								mongo.insertOne(
									instance,
									CAMPAIGN_USER_COLLECTION,
									newUser
								).then((result) => {
									resolve(result);
								}).catch((err) => {
									reject(err);
								});
							} else {
								reject(createError(409, "User already exists"));
							}
						});
					}).catch((err) => {
						reject(err);
					});
				});
			},
			"checkCampaignUserExistence": function (userEmail) {
				return new Promise((resolve, reject) => {
					if (!userEmail) {
						return reject(createError(400, "Invalid params"));
					}
					mongo.connect().then((instance) => {
						mongo.findOne(
							instance,
							CAMPAIGN_USER_COLLECTION, {
								"query": {
									"email": userEmail
								}
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
			"querySingleUser": function (userEmail) {
				return new Promise((resolve, reject) => {
					if (!userEmail) {
						return reject(createError(400, "Invalid params"));
					}
					mongo.connect().then((instance) => {
						mongo.findOne(
							instance,
							CAMPAIGN_USER_COLLECTION, {
								"query": {
									"email": userEmail
								}
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
			}
		}
	};

}());