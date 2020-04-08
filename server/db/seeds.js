use hotel;

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Basil Fawlty",
        email: "basil@fawltytowers.co.uk",
        checkedin: true
    },

    {
        name: "Polly Sherman",
        email: "polly@gmail.com",
        checkedin: false
    },

    {
        name: "Manuel",
        email: "Manuel@hotmail.com",
        checkedin: true
    }
]);