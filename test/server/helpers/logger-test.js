(function (process) {
	"use strict";


	module.exports = function (MongoDB) {
		const assert = require("assert");
		const chai = require("chai");
		const chaiAsPromised = require("chai-as-promised");
		chai.use(chaiAsPromised);
		chai.should();
		const loggerHelper = require("../../../server/helpers/logger");
		const createError = require("http-errors");

		describe("Logger helper package", () => {
			context("Invalid instantiation", () => {
			});

			context("Valid instantiation", () => {
				const logger = loggerHelper();
				it("should export an object", function() {
					assert.equal(typeof logger, "object");
				});

				it("should expose an error method", function() {
					assert.equal(typeof logger.error, "function");
				});

				it("should expose an info method", function() {
					assert.equal(typeof logger.info, "function");
				});

				it("should expose a getErrorLogs method", function() {
					assert.equal(typeof logger.getErrorLogs, "function");
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
