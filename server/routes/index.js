/**
 * Created by danielabrao on 02/07/17.
 */
(function () {
	"use strict";
	module.exports = function (app) {
		require("./partials/adminHandler")(app);
		require("./partials/campaignsHandler")(app);

		require("./partials/campaignUsersHandler")(app);

	};

}());