(function () {
	"use strict";

	require("winston-daily-rotate-file");
	const winston = require("winston");
	const createError = require("http-errors");
	const errorLogger = new winston.Logger({
		"level": "error",
		"transports": [
			new (winston.transports.Console)(),
			new (winston.transports.DailyRotateFile)({
				"filename": "./root/error_logs/.log",
				"datePattern": "yyyy-MM-dd",
				"prepend": true,
				"level": "error"
			})
		]
	});
	const infoLogger = new winston.Logger({
		"level": "info",
		"transports": [
			new (winston.transports.Console)()
		]
	});
	const fs = require("fs");

	module.exports = function () {
		return {
			"error": errorLogger.error,
			"info": infoLogger.info,
			"getErrorLogs": function (params = {}) {
				return new Promise((resolve, reject) => {
					if (!params.query) {
						return reject(createError(400, "Invalid day to query"));
					} else {
						let filePath = `./root/error_logs/${params.query}.log`;
						let fileExists = fs.existsSync(filePath);
						if (fileExists) {
							if (params.download && fileExists) {
								return resolve(filePath);
							} else {
								fs.readFile(filePath, "utf-8", (err, file) => {
									return err ? reject(err) : resolve(file);
								});
							}
						} else {
							return reject(createError(404, "File not found"));
						}
					}
				});
			}
		};
	};

}());