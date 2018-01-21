(function (process) {
	"use strict";


	module.exports = function () {
		const assert = require("assert");
		const chai = require("chai");
		const chaiAsPromised = require("chai-as-promised");
		chai.use(chaiAsPromised);
		chai.should();
		const Users = require("../../../server/helpers/campaignUsers");
		const createError = require("http-errors");

		describe("CampaignUsers helper package", () => {
			context("Valid instantiation", () => {
				const users = new Users();
				it("should export an object", function() {
					assert.equal(typeof users, "object");
				});

				it("should expose an createCampaignUser method", function() {
					assert.equal(typeof users.createCampaignUser, "function");
				});

				it("should expose an checkCampaignUserExistence method", function() {
					assert.equal(typeof users.checkCampaignUserExistence, "function");
				});

				it("should expose a querySingleUser method", function() {
					assert.equal(typeof users.querySingleUser, "function");
				});

				describe("createCampaignUser method", () => {
					return false;
				});

				describe("checkCampaignUserExistence method", () => {
					return false;
				});

				describe("querySingleUser method", () => {
					return false;
				});

			});
		});

	}


}(process));
