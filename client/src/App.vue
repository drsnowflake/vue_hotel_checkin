<template>
	<div id="app">
		<bookings-form></bookings-form>
		<bookings-grid></bookings-grid>
	</div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
	components: {
		'bookings-form': BookingsForm,
		'bookings-grid': BookingsGrid,
	},
};
</script>

<style>
body {
	background: lightgray;
}
</style>
