<template>
    <nav id="header" class="navbar is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
			</a>

			<button class="button navbar-burger">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

    </nav>
</template>

<script type="text/javascript">
    (function () {
        "use strict";
        module.exports = {
            "name": "AppHeader",
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
	#header {
		width: 100%;
		height: 60px;
		box-sizing: border-box;
	}
</style>