<template>
    <div id="sidemenu" class="menu">
		<div class="menu-list">
			<router-link to="/foo">Go to Foo</router-link>
			<router-link to="/bar">Go to Bar</router-link>
		</div>
    </div>
</template>

<script type="text/javascript">
    (function () {
        "use strict";
        module.exports = {
            "name": "AppSidemenu",
            "props": {},
            "data": function () {
                return {}
            },
            "components": {},
            "methods": {}
        };
    }());
</script>
<style scoped>
	#sidemenu {
		height: calc(100% - 60px);
		width: 15%;
		display: flex;
		flex-direction: column;
	}
</style>