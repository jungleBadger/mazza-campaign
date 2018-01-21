(function (process) {
	"use strict";


	module.exports = function () {
		const assert = require("assert");
		const chai = require("chai");
		const chaiAsPromised = require("chai-as-promised");
		chai.use(chaiAsPromised);
		chai.should();
		const Mongo = require("../../../server/helpers/mongo");
		const createError = require("http-errors");

		describe("Mongo helper package", () => {
			context("Invalid instantiation", () => {
			});

			context("Valid instantiation", () => {
				const mongoInstance = new Mongo();
				it("should export an object", function() {
					assert.equal(typeof mongoInstance, "object");
				});

				it("should expose an connect method", function() {
					assert.equal(typeof mongoInstance.connect, "function");
				});

				it("should expose an disconnect method", function() {
					assert.equal(typeof mongoInstance.disconnect, "function");
				});

				it("should expose a insertOne method", function() {
					assert.equal(typeof mongoInstance.insertOne, "function");
				});

				it("should expose a find method", function() {
					assert.equal(typeof mongoInstance.find, "function");
				});

				describe("error method", () => {
					return false;
				});

				describe("info method", () => {
					return false;
				});

				describe("getErrorLogs method", () => {
					return false;
				});

			});
		});

	}


}(process));
