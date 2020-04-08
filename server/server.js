const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
	.then((client) => {
		const db = client.db('hotel');
		const bookingData = db.collection('bookings');
		const bookingRouter = createRouter(bookingData);
		app.use('/api/bookings', bookingRouter);
	})
	.catch(console.err);

app.listen(3000, function () {
	console.log(`Listening on port ${this.address().port}`);
});
