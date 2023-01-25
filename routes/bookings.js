var express = require("express");
var router = express.Router();
const Booking = require("../models/bookings");

// GET upcoming bookings of paid trips

router.get("/", function (req, res) {
  Booking.find({
    isPaid: true,
  })
    .populate("trips")
    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        res.json({ result: false, error: "Aucune reservation trouvée" });
      } else {
        res.json({ result: true, bookings: data });
      }
    });
});

// POST a new trip to booking

router.post("/", function (req, res) {
  var booking = new Booking({
    tripID: req.body.tripID,
    isPaid: false,
  });
  booking.save().then((booking) => {
    res.json({
      result: true,
      message: "Réservation ajoutée au panier !",
      booking: booking,
    });
  });
});

// DEL a trip from booking

router.delete("/:id", function (req, res) {
  Booking.findByIdAndDelete(req.params.id)
    .then(() =>
      res.json({ result: true, message: "Réservation supprimée du panier !" })
    )
    .catch((err) => res.json({ result: false, error: err }));
});

module.exports = router;
