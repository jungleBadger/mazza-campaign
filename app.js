/**
 * Created by danielabrao on 6/9/17.
 */
(function () {
	"use strict";
	require("dotenv").config({
		"silent": true
	});

	const appPort = process.env.APP_PORT || process.env.PORT || process.env.VCAP_APP_PORT || 6050;
	const fs = require("fs");
	const express = require("express");
	const request = require("request");
	const helmet = require("helmet");
	const app = express();
	let server;
	if (process.env.LOCAL_HTTPS) {
		server = require("https").createServer({
			"hostname": "localhost",
			"agent": false,
			"key": fs.readFileSync("./root/certificates/local/localhost-privkey.pem"),
			"cert": fs.readFileSync("./root/certificates/local/localhost-cert.pem"),
			"rejectUnauthorized": false
		}, app);
	} else {
		server = require("http").createServer(app);
	}
	const cookieSession = require("cookie-session");
	const cookieParser = require("cookie-parser");
	const passport = require("passport");
	const compress = require("compression");
	const engines = require("consolidate");
	const morgan = require("morgan");
	const bodyParser = require("body-parser");
	const Logger = require("./server/helpers/logger");
	let logger = new Logger();

	app.use(helmet());
	app.use(compress());
	app.use(cookieParser());
	app.use(cookieSession({
		"secret": process.env.APP_SECRET,
		"maxAge": 86400000,
		"saveUninitialized": false,
		"resave": false,
		"name": "mazza",
		"key": "mazzakey",
		"cookie": {
			"secure": true,
			"httpOnly": true
		}
	}));

	app.engine("html", engines.ejs);
	app.set("view engine", "ejs");
	app.set("views", __dirname + "/client");
	app.use(express.static(__dirname + "/client"));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(bodyParser.json({
		"limit": "50mb"
	}));

	app.use(bodyParser.urlencoded({
		"extended": true,
		"limit": "10mb"
	}));

	if (process.env.DEBUG) {
		app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
	}

	server.listen(appPort, function () {
		logger.info(`Server running on port: ${appPort}`);
		require("./server/routes/index")(app, request);
	});

}());