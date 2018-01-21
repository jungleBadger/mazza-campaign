(function (process) {
	"use strict";


	module.exports = function () {
		const assert = require("assert");
		const chai = require("chai");
		const chaiAsPromised = require("chai-as-promised");
		chai.use(chaiAsPromised);
		chai.should();
		const Campaigns = require("../../../server/helpers/campaigns");
		const createError = require("http-errors");

		describe("Campaigns helper package", () => {
			context("Valid instantiation", () => {
				const campaigns = new Campaigns();
				it("should export an object", function() {
					assert.equal(typeof campaigns, "object");
				});

				it("should expose an createCampaign method", function() {
					assert.equal(typeof campaigns.createCampaign, "function");
				});

				describe("createCampaign method", () => {
					return false;
				});

			});
		});

	}


}(process));
