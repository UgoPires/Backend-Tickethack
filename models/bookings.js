const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tripID: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
  isPaid: Boolean,
});




const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
