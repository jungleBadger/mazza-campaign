(function () {
	"use strict";

	module.exports = {
		"trackLocationToastr": function (context, params) {
			context.state.toastrs.push(params);
		},
		"toggleAdminDataLoading": function (context) {
			context.state.adminDataLoading = !context.state.adminDataLoading;
		},
		"toggleGroupsDataLoading": function (context) {
			context.state.groupsDataLoading = !context.state.groupsDataLoading;
		},
		"toggleLoadBranchesModal": function (context) {
			context.state.loadBranchesModalState = !context.state.loadBranchesModalState;
		},
		"toggleFindTechniciansModal": function (context) {
			context.state.findTechniciansModalState = !context.state.findTechniciansModalState;
		},
		"toggleAdminUsersModalState": function (context) {
			context.state.adminUsersModalState = !context.state.adminUsersModalState;
		}
	}

}());