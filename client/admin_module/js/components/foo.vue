<template>
	<transition
		mode="out-in"
		enter-active-class="animated fadeInDown"
		leave-active-class="animated fadeOutUp">
	>
		<div>
			affa
			<font-awesome-icon :icon="spinner" spin></font-awesome-icon>
		</div>
	</transition>

</template>

<script type="text/javascript">
    (function () {
        "use strict";
        const spinnerIcon = require("@fortawesome/fontawesome-pro-light/faSpinner");
        module.exports = {
            "name": "Foo",
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