(function (process) {
	"use strict";
	process.env.TEST_ENV = true;

	require("dotenv").config({
		"silent": true
	});

	process.log = require("winston");

	describe("App instantiation", function () {
		require("./server/helpers/mongo-test")();
		require("./server/helpers/logger-test")();
		require("./server/helpers/campaigns-test")();
		require("./server/helpers/campaignUsers-test")();
	});





}(process));