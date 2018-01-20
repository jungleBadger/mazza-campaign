(function (process) {
	"use strict";

	require("dotenv").config({
		"silent": true
	});

	process.env.TEST_ENV = true;
	process.log = require("winston");

	require("./server/helpers/logger-test")();



}(process));
