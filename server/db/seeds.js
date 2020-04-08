use hotel;

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Basil Fawlty",
        email: "basil@fawltytowers.co.uk",
        checkedIn: true
    },

    {
        name: "Polly Sherman",
        email: "polly@gmail.com",
        checkedIn: false
    },

    {
        name: "Manuel",
        email: "Manuel@hotmail.com",
        checkedIn: true
    }
]);