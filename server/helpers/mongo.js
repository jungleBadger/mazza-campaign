(function () {
    "use strict";


	const MONGO_STRING = require("../configs/mongo-string");
	const MONGO_DB = process.env.TEST_ENV || process.env === "TEST" ? process.env.MONGO_TEST_DB : process.env.MONGO_DB;
	const MongoClient = require("mongodb").MongoClient;
	const ObjectId = require("mongodb").ObjectId;
	const createError = require("http-errors");
    module.exports = function () {
		let cachedDb = "";
		return {
			"connect": function (connectionTarget = MONGO_DB) {
				return new Promise((resolve, reject) => {
					if (cachedDb) {
						resolve(cachedDb);
					}
					MongoClient.connect(MONGO_STRING, {
						"reconnectTries": 60,
						"reconnectInterval": 1000
					}).then((client) => {
						cachedDb = client.db(connectionTarget);
						return resolve(cachedDb);
					}).catch((err) => {
						return reject(err);
					});
				});
			},
			"disconnect": function (client = {}) {
				if (client && client.close) {
					return client.close(() => {
						cachedDb = "";
					});
				}
			},
			"find": function (db = cachedDb, collection, params = {}) {
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
			"findOne": function (db = cachedDb, collection, params) {
				return new Promise((resolve, reject) => {
					if (!db || !collection || !params) {
						reject(createError(400, "Invalid params"));
					}
					let base = db.collection(collection);
					base.findOne(params.query,  {
						"projection": params.projection || null
					}, (err, data) => {
						return err ? reject(err) : resolve(data);
					});
				});
			},
			"insertOne": function (db = cachedDb, collection, doc) {
				return new Promise((resolve, reject) => {
					if (!db || !collection || !doc) {
						reject(createError(400, "Invalid params"));
					}
					let base = db.collection(collection);
					base.insertOne(doc, null, (err, data) => {
						return err ? reject(err) : resolve(data.insertedId);
					});
				});
			},
			"deleteOneById": function (db = cachedDb, collection, docId) {
				return new Promise((resolve, reject) => {
					if (!db || !collection || !docId) {
						reject(createError(400, "Invalid params"));
					}
					let base = db.collection(collection);
					base.deleteOne({
						"_id": this.ObjectId(docId)
					}, null, (err, data) => {
						return err ? reject(err) : resolve(data.deletedCount);
					});
				});
			},
			"ObjectId": ObjectId
		};

	}
}());