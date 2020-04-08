<template>
	<div
		id="guestBox"
		v-bind:class="[booking.checkedIn ? 'guestCheckedIn' : 'guestCheckedOut']"
	>
		<div>Guest Name: {{ booking.name }}</div>
		<div v:model="checkInStatus">
			Guest Checked in: {{ this.checkInStatus }}
		</div>
		<button v-on:click="toggleCheckIn(booking._id)">Toggle check in</button>

		<button v-on:click="handleDelete(booking._id)">Delete Booking</button>
	</div>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

export default {
	name: 'booking',
	data() {
		return {
			checkInStatus: '',
		};
	},
	props: ['booking'],
	mounted() {
		this.checkInStatus = this.booking.checkedIn ? 'Yes' : 'No';
	},
	methods: {
		handleDelete(id) {
			BookingService.deleteBooking(id).then((response) =>
				eventBus.$emit('booking-deleted', id)
			);
		},
		toggleCheckIn(id) {
			this.booking.checkedIn = this.booking.checkedIn ? false : true;
			this.checkInStatus = this.booking.checkedIn ? 'Yes' : 'No';
			const payload = {
				name: this.booking.name,
				email: this.booking.email,
				checkedIn: this.booking.checkedIn,
			};
			BookingService.updateBooking(payload, id);
		},
	},
};
</script>

<style scoped>
#guestBox {
	padding: 5px;
	margin: 10px;
	width: 250px;
	border: blue 2px solid;
}

.guestCheckedIn {
	background: lightgreen;
}

.guestCheckedOut {
	background: lightcoral;
}
</style>
