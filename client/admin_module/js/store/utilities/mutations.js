(function () {
	"use strict";

	const mutations = require("./constants/mutation-types");

	module.exports = {
		[mutations.TRACK_LOCATION_TOASTR]: function (context, params) {
			context.state.toastrs.push(params);
		},
		[mutations.TOGGLE_ADMIN_DATA_LOADING]: function (context) {
			context.state.adminDataLoading = !context.state.adminDataLoading;
		}
	}

}());