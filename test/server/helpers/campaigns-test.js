(function (process) {
	"use strict";


	module.exports = function () {
		const assert = require("assert");
		const chai = require("chai");
		const chaiAsPromised = require("chai-as-promised");
		chai.use(chaiAsPromised);
		chai.should();
		const Campaigns = require("../../../server/helpers/campaigns");
		const ObjectId = require("mongodb").ObjectId;
		const createError = require("http-errors");
		let createdId = "";
		let createdUser = {};

		describe("Campaigns helper package", () => {
			context("Valid instantiation", () => {
				const campaigns = new Campaigns();
				it("should export an object", function() {
					assert.equal(typeof campaigns, "object");
				});

				it("should expose an createCampaign method", function() {
					assert.equal(typeof campaigns.createCampaign, "function");
				});

				it("should expose an queryCampaign method", function() {
					assert.equal(typeof campaigns.queryCampaign, "function");
				});

				it("should expose an deleteCampaign method", function() {
					assert.equal(typeof campaigns.deleteCampaign, "function");
				});

				describe("createCampaign method", () => {

					it("should be rejected with an error if operator param is omitted", function() {
						return Promise.all([
							campaigns.createCampaign({}).should.be.rejectedWith(Error),
							campaigns.createCampaign(NaN).should.be.rejectedWith(Error),
							campaigns.createCampaign().should.be.rejectedWith(Error),
							campaigns.createCampaign(0).should.be.rejectedWith(Error)
						]);
					});

					it("should be rejected with a 400 status code and Invalid Params message on missing params.name param", function(done) {
						campaigns.createCampaign({
							"name": "",
							"email": "xx@xx.com"
						}).catch((err) => {
							assert.deepEqual(err, createError(400, "Invalid params to build a campaign"));
							done();
						});
					});

					it("should be rejected with a 400 status code and Invalid Params message on missing params.email param", function(done) {
						campaigns.createCampaign({
							"name": "x",
							"email": 0
						}).catch((err) => {
							assert.deepEqual(err, createError(400, "Invalid params to build a campaign"));
							done();
						});
					});

					it("should create campaign and be resolved if params correct", function (done) {
						campaigns.createCampaign({
							"name": "x",
							"email": "xx@xx.com"
						}).then((result) => {
							createdId = result;
							assert.equal(result instanceof ObjectId, true);
							campaigns.queryCampaign({
								"query": {
									"_id": result
								}
							}).then((result) => {
								createdUser = result;
								assert.deepEqual(result._id, createdId);
								done();
							});
						});
					});
				});

				describe("queryCampaign method", () => {
					it("should be rejected with an error if params is omitted", function() {
						return Promise.all([
							campaigns.queryCampaign({}).should.be.rejectedWith(Error),
							campaigns.queryCampaign(NaN).should.be.rejectedWith(Error),
							campaigns.queryCampaign().should.be.rejectedWith(Error),
							campaigns.queryCampaign(0).should.be.rejectedWith(Error)
						]);
					});

					it("should be rejected with an error if params.query is either omitted or invalid", function() {
						return Promise.all([
							campaigns.queryCampaign({}).should.be.rejectedWith(Error),
							campaigns.queryCampaign({"query": ""}).should.be.rejectedWith(Error),
							campaigns.queryCampaign({"query": 0}).should.be.rejectedWith(Error),
							campaigns.queryCampaign({"query": NaN}).should.be.rejectedWith(Error)
						]);
					});

					it("should be rejected with a 400 error if params.query is invalid", function (done) {
						campaigns.queryCampaign({"query": null}).catch((err) => {
							assert.deepEqual(err, createError(400, "Invalid params to query campaign"));
							done();
						});
					});

					it("should retrieve user using ObjectId object ID as query", function (done) {
						campaigns.queryCampaign({
							"query": {
								"_id": createdId
							}
						}).then((result) => {
							assert.ok(result._id);
							assert.deepEqual(result, createdUser);
							done();
						});
					});

					it("should retrieve user using raw string ID as query", function (done) {
						campaigns.queryCampaign({
							"query": {
								"_id": createdId.toString()
							}
						}).then((result) => {
							assert.ok(result._id);
							assert.deepEqual(result, createdUser);
							done();
						});
					});

					it("should retrieve user and limit params using params.projection field", function (done) {
						campaigns.queryCampaign({
							"query": {
								"_id": createdId
							}
						}).then((result) => {
							assert.ok(result.hasOwnProperty("name"));
							assert.ok(result.name);
							campaigns.queryCampaign({
								"query": {
									"_id": createdId
								},
								"projection": {
									"_id": 1
								}
							}).then((result) => {
								assert.ok(!result.hasOwnProperty("name"));
								done();
							});
						});
					});
				});

				describe("deleteCampaign method", () => {
					it("should be rejected with an error if params is omitted", function() {
						return Promise.all([
							campaigns.deleteCampaign("").should.be.rejectedWith(Error),
							campaigns.deleteCampaign(NaN).should.be.rejectedWith(Error),
							campaigns.deleteCampaign().should.be.rejectedWith(Error),
							campaigns.deleteCampaign(0).should.be.rejectedWith(Error)
						]);
					});

					it("should be rejected with a 400 error if campaignId is invalid", function (done) {
						campaigns.deleteCampaign(null).catch((err) => {
							assert.deepEqual(err, createError(400, "Invalid params to delete campaign"));
							done();
						});
					});

					it("should delete campaign", function (done) {
						campaigns.deleteCampaign(createdId).then((result) => {
							assert.equal(result, 1);
							campaigns.queryCampaign({
								"query": {
									"_id": createdId
								}
							}).then((result) => {
								assert.equal(result, null);
								done();
							});
						});
					});
				});

			});
		});

	}


}(process));
