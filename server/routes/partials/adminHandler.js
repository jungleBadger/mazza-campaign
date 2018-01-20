(function () {
	"use strict";

	module.exports = function (app) {
		app.get("/admin", function (req, res) {
			return res.status(200).render("./admin_module/index.html");
		});
	}
}());