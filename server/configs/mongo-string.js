(function (process) {
    "use strict";

    module.exports = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_AUTH_SOURCE}`;

}(process));
