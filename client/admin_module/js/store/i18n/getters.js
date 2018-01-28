(function () {
	"use strict";

	module.exports = {
		"languages": function (context) {
			return context.state.languages;
		},
		"selectedLanguage": function (context) {
			return context.state.selectedLanguage;
		}
	};

}());