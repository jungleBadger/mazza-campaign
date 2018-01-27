<template>
	<div class="test">
		affa
		<font-awesome-icon :icon="spinner" spin></font-awesome-icon>
	</div>
</template>

<script type="text/javascript">
    (function () {
        "use strict";
        const spinnerIcon = require("@fortawesome/fontawesome-pro-light/faSpinner");
        module.exports = {
            "name": "CampaignCreatePanel",
            "props": {},
            "data": function () {
                return {}
            },
			"computed": {
				spinner () {
					return spinnerIcon;
				}
			},
            "components": {},
            "methods": {}
        };
    }());
</script>
<style scoped>
</style>