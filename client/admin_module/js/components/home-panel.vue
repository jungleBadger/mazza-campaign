<template>
	<div id="home">
		<div class="test">
			<i18n path="greeting" tag="label" for="greeting" :locale="selectedLanguage"/>
		</div>
	</div>
</template>

<script type="text/javascript">
	(function () {
		"use strict";

		const i18nGetters = require("../store/i18n/mappers/mapGetters");

		module.exports = {
			"name": "HomePanel",
			"props": {},
			"data": function () {
				return {};
			},
			"computed": {
				...i18nGetters
			},
			"components": {}
		};
	}());
</script>
<style scoped>
</style>