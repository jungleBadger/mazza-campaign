(function () {
	"use strict";

	const iziToast = require("izitoast");
	module.exports = {
		"openToaster": function (context, props) {
			iziToast[props.toastType || "info"]({
				"title": props.title,
				"message": props.message || "",
				"timeout": props.timeout || false,
				"id": props.id,
				"toastOnce": props.toastOnce,
				"animateInside": false,
				"buttons": [
					["<button><b>Acknowledge</b></button>", function (instance, toast) {
						instance.hide(toast, { transitionOut: "fadeOut" }, "button");
					}, true]
				]
			});
		}

	};

}());