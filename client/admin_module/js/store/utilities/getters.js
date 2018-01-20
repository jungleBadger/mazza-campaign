(function () {
	"use strict";

	module.exports = {
		"getToastrs": function (context) {
			return context.state.toastrs;
		},
		"getAdminDataLoading": function (context) {
			return context.state.adminDataLoading;
		},
		"getGroupsDataLoading": function (context) {
			return context.state.groupsDataLoading;
		},
		"getLoadBranchesModalState": function (context) {
			return context.state.loadBranchesModalState;
		},
		"getFindTechnicianModalState": function (context) {
			return context.state.findTechniciansModalState;
		},
		"getAdminUsersModalState": function (context) {
			return context.state.adminUsersModalState;
		}
	};

}());