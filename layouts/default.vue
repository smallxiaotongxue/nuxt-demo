<template>
	<div>
		<Visits />
		<Nuxt />
	</div>
</template>

<script>
import Visits from "~/components/Visits";

export default {
	name: 'default-layout',
	components: { Visits }
};
</script>

<style></style>
