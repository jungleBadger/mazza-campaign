(function (process) {
	"use strict";

	require("dotenv").config({
		"silent": true
	});

	process.env.TEST_ENV = true;
	process.log = require("winston");
	const mongoInstance = require("../server/helpers/mongo");

	describe("App instantiation", function () {
		require("./server/helpers/mongo-test")();
		require("./server/helpers/logger-test")();
	});





}(process));