<template>
	<div id="createCampaign">
		<div class="test">
			<font-awesome-icon :icon="spinner" spin />
		</div>
	</div>
</template>

<script type="text/javascript">
    (function () {
        "use strict";
        const spinnerIcon = require("@fortawesome/fontawesome-pro-light/faSpinner");
		const i18nGetters = require("../store/i18n/mappers/mapGetters");

		module.exports = {
            "name": "CampaignCreatePanel",
            "props": {},
            "data": function () {
                return {}
            },
			"computed": {
				spinner () {
					return spinnerIcon;
				},
				...i18nGetters
			},
            "components": {},
            "methods": {}
        };
    }());
</script>
<style scoped>
</style>