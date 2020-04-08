<template>
	<div>
		<form id="bookingForm" v-on:submit="handleSubmit">
			<h2>Add a Booking</h2>
			<label for="name">Name: </label>
			<input type="text" id="name" v-model="name" required />

			<label for="email">Email Address</label>
			<input type="email" id="email" v-model="email" required />

			<label for="checkedIn">Is the guest checked in?</label>
			<input type="checkbox" id="checkedIn" v-model="checkedIn" />

			<input type="submit" value="Add Booking" id="save" />
		</form>
	</div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';
export default {
	name: 'bookings-form',
	data() {
		return {
			name: '',
			email: '',
			checkedIn: '',
		};
	},
	methods: {
		handleSubmit(event) {
			event.preventDefault();
			const payload = {
				name: this.name,
				email: this.email,
				checkedIn: this.checkedIn,
			};

			BookingService.postBooking(payload).then((booking) => {
				eventBus.$emit('booking-added', booking);

				this.name = '';
				this.email = '';
				this.checkedIn = false;
			});
		},
	},
};
</script>

<style>
#bookingForm {
	padding-bottom: 10px;
	padding-left: 25px;
}
</style>
