const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    Price: Number
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;