(function () {
    "use strict";


	const MONGO_STRING = require("../configs/mongo-string");
	const MONGO_DB = process.env.MONGO_DB;
	const MongoClient = require("mongodb").MongoClient;
	const createError = require("http-errors");
    module.exports = function () {
		let cachedDb = "";
		return {
			"connect": function () {
				return new Promise((resolve, reject) => {
					if (cachedDb) {
						resolve(cachedDb);
					}
					MongoClient.connect(MONGO_STRING, {
						"reconnectTries": 60,
						"reconnectInterval": 1000
					}).then((client) => {
						cachedDb = client.db(MONGO_DB);
						return resolve(cachedDb);
					}).catch((err) => {
						return reject(err);
					});
				});
			},
			"disconnect": function (client) {
				return client.close(() => {
					cachedDb = "";
				});
			},
			"find": function (db, collection, params = {}) {
				return new Promise((resolve, reject) => {
					if (!db || !collection) {
						reject(createError(400, "Invalid params"));
					}
					let base = db.collection(collection);
					base.find(params.query, {
						"limit": params.limit || 0,
						"skip": params.skip || 0,
						"projection": params.projection || null,
						"sort": params.sort || null
					}).toArray((err, data) => {
						return err ? reject(err) : resolve(data);
					});
				});
			},
			"insertOne": function (db, collection, doc) {
				return new Promise((resolve, reject) => {
					if (!db || !collection || !doc) {
						reject(createError(400, "Invalid params"));
					}
					let base = db.collection(collection);
					base.insertOne(doc, null, (err, data) => {
						return err ? reject(err) : resolve(data);
					});
				});
			}
		};

	}
}());