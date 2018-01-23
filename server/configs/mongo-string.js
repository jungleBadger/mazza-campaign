(function (process) {
    "use strict";

    module.exports = process.env.TEST_ENV || process.env === "TEST" ?
		`mongodb://${process.env.MONGO_TEST_USER}:${process.env.MONGO_TEST_PASSWORD}@${process.env.MONGO_TEST_URL}:${process.env.MONGO_TEST_PORT}/${process.env.MONGO_TEST_AUTH_SOURCE}` :
		`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_AUTH_SOURCE}`;

}(process));
