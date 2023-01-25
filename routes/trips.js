var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
const moment = require("moment");

// POST search departure and arrival with corresponding date

router.post("/", function (req, res) {
  let searchDate = moment(req.body.date, "YYYYMMDD").toISOString();
  let start = moment(searchDate).startOf("day").toISOString();
  let end = moment(searchDate).endOf("day").toISOString();
  Trip.find({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") },
    date: { $gte: start, $lte: end },
  }).then((data) => {
    console.log(data);
    if (data.length === 0) {
      res.json({ result: false, error: "Aucune correspondance trouvée" });
    } else {
      res.json({ result: true, trips: data });
    }
  });
});

module.exports = router;
