<template>
	<div id="createUserCampaign">
		<div class="test">
			<font-awesome-icon :icon="rocket" spin />
		</div>
	</div>
</template>

<script type="text/javascript">
    (function () {
        "use strict";

		const i18nGetters = require("../store/i18n/mappers/mapGetters");
		module.exports = {
            "name": "UserCampaignCreatePanel",
            "props": {},
            "data": function () {
                return {}
            },
			"computed": {
				rocket() {
					return require("@fortawesome/fontawesome-pro-light/faRocket")
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